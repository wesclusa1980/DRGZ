import React from "react";
import { useDrop } from "react-dnd";
var classNames = require("classnames");
import useSWR from "swr";

import Link from "next/link";

const Dropzone = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);

  const [{ canDrop, isOver, handlerId }, drop] = useDrop({
    accept: "item",
    drop: () => ({ name: "Instant Purchase" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      handlerId: monitor.getHandlerId(),
    }),
  });
  var borderClass = classNames(
    "px-5 pb-9 pt-5",
    "border-gray-500",
    "text-center",
    "border-dashed",
    "transition-all duration-500 ease-in-out",
    {
      "border-2": !canDrop,
      "border-4": canDrop,
      "rounded-full": !(canDrop && isOver),
      "border-blue-bright border-4 rounded bg-white": canDrop && isOver,
    }
  );

  var textClass = classNames("text-sm", "px-1", {
    "font-bold": canDrop,
    "text-blue-bright": isOver,
  });

  return (
    <div ref={drop} data-handler-id={handlerId}>
      <fieldset class={borderClass}>
        {user && user.drgz ? (
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
            you can drag & drop a product here and it will be purchased
            instantly!
          </p>
        )}
        <legend class={textClass}>BUY IT NOW</legend>
      </fieldset>
    </div>
  );
};

export default Dropzone;
