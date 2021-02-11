import React from "react";
import { useDrag } from "react-dnd";
var classNames = require("classnames");

const Item = ({ name, imgPath, price, subtitle }) => {
  const [{ isDragging, handlerId }, drag] = useDrag({
    item: { name, price, type: "item" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });
  var itemClass = classNames(
    "border-4",
    "border-dashed",
    "border-gray-200",
    "rounded-lg"
  );
  return (
      <div ref={drag} data-handler-id={handlerId} class="max-w-sm rounded-lg overflow-hidden shadow-lg">
        <img class="w-full" src={imgPath} alt="Mountain" />
        <div class="px-6 py-4 text-center text-gray-900">
          <div class="text-sm">{subtitle}</div>
          <div class="font-bold text-xl mb-1">{name}</div>
          <div class="font-bold text-xl mb-1">{`$${price}`}</div>
        </div>
        {/* below is "tags" for card */}
        {/* <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
      </div>
  );
};

export default Item;
