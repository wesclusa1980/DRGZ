import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
var classNames = require("classnames");
import useSWR from "swr";

import Link from "next/link";

const Dropzone = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const [items, setItems] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);

  const [{ canDrop, isOver, handlerId }, drop] = useDrop({
    accept: "item",
    drop: () => ({ name: "Instant Purchase", addItem }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  useEffect(() => {
    if (isProcessing) {
      setInterval(() => {
        setIsProcessing(false);
      }, 5000);
    }
  }, [isProcessing]);

  const addItem = (itemImage, itemName) => {
    if (!isProcessing) setIsProcessing(true);
    setItems([...items, { img: itemImage, name: itemName }]);
  };

  var defaultBorderClass = classNames(
    "border-gray-500",
    "text-center",
    // "border-dashed",
    "h-72 w-72",
    "transition-all duration-5000 ease-in-out",
    "flex items-center justify-center",
    {
      "border-2 bg-offwhite": !canDrop,
      "border-4 animate-pulse bg-white": canDrop,
      "rounded-full": !(canDrop && isOver),
      "border-blue-bright border-4 rounded-lg": canDrop && isOver,
    }
  );

  var filledBorderClass = classNames(
    "border-gray-500",
    "h-72 w-72",
    "rounded-lg",
    "text-center",
    "border-2 bg-offwhite",
    {
      "border-blue-bright border-4 bg-white animate-pulse": isProcessing,
    }
  );

  var textClass = classNames("px-1", "mt-3", "font-semibold", {
    "font-bold": canDrop,
    "text-blue-bright": isOver,
  });

  const defaultDropText =
    user && user.drgz ? (
      <p>
        With {user.drgz} available you can drag & drop a product here and it
        will be purchased instantly!
      </p>
    ) : (
      <p>
        When you have{" "}
        <Link href={user && !user.drgz ? "/account" : "/signup"}>
          <u>DRGZ</u>
        </Link>{" "}
        you can drag & drop a product here and it will be purchased instantly!
      </p>
    );

  return (
    <div ref={drop} data-handler-id={handlerId} className="flex items-center">
      <fieldset
        class={items.length === 0 ? defaultBorderClass : filledBorderClass}
      >
        <div className="p-2">
          {items.length === 0 &&
            (canDrop ? "Drop here to purchase" : defaultDropText)}
          <div className="flex flex-wrap">
            {items.map((item) => {
              return (
                <div className="flex flex-col">
                  <img src={item.img} className="w-16 h-16 m-2 rounded-lg" />
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <legend class={textClass}>BUY IT NOW</legend>
      </fieldset>
    </div>
  );
};

export default Dropzone;
