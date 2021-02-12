import React, {useEffect} from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from 'react-dnd-html5-backend';
var classNames = require("classnames");

const Item = ({ name, imgPath, price, subtitle }) => {
  const [{ isDragging, handlerId }, drag, dragPreview] = useDrag({
    item: { name, price, imgPath, subtitle, type: "item" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dropResult.addItem(item.imgPath, name);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
}, []);

  var itemClass = classNames(
    "max-w-xs",
    "rounded-lg",
    "overflow-hidden",
    "transform",
    "scale-95",
    {
      "cursor-grab":!isDragging,
      "opacity-50 shadow":isDragging,
      // "border border-green-900":isDragging
    }
    
  );
  return (
    <div ref={drag} data-handler-id={handlerId} class={itemClass}>
      <img class="w-full" src={imgPath} alt="Mountain" />
      <div class="px-6 py-4 text-center text-gray-900 bg-white">
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
