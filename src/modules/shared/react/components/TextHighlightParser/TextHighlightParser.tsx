import React from "react";

export default function TextHighlightParser({
  text,
  highLightColor = "text-blue-500",
}: {
  text: string;
  highLightColor: string;
}) {
  const textArray = text.split(" ");

  return (
    <div className="flex flex-wrap items-center">
      {textArray.map((char, index) => {
        return (
          <span
            key={index}
            className={char.includes("<H>") ? highLightColor : ""}
          >
            {char.replaceAll("<H>", "")}{" "}
          </span>
        );
      })}
    </div>
  );
}
