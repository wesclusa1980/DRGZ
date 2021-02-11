import React from "react";
import { useDrop } from "react-dnd";
var classNames = require("classnames");

const Dropzone = () => {
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
    "px-5 pb-9 pt-4",
    "border-gray-500",
    "rounded-lg",
    "text-right",
    {
      "border-2": !canDrop,
      "border-4": canDrop,
      "border-blue-700 border-4": canDrop && isOver
    }
  );

  var textClass = classNames("text-sm", "px-1", {
    "font-bold": canDrop,
    "text-blue-700 ": isOver
  });
  return (
    <div ref={drop} data-handler-id={handlerId}>
      <fieldset class={borderClass}>
        <legend class={textClass}>BUY IT NOW</legend>
      </fieldset>
    </div>
  );
};

export default Dropzone;
