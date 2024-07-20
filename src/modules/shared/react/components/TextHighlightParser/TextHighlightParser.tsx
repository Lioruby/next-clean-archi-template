import { classNames } from "@root/modules/shared/react/libs/utils";
import { Fragment } from "react";

export default function TextHighlightParser({
  text,
  highLightColor = "text-blue-500",
}: {
  text: string;
  highLightColor?: string;
}) {
  const textArray = text.split(" ");

  return (
    <>
      {textArray.map((char, index) => {
        return (
          <Fragment key={index}>
            <span
              className={classNames(char.includes("*") ? highLightColor : "")}
            >
              {char.replaceAll("*", "")}
            </span>
            <span> </span>
          </Fragment>
        );
      })}
    </>
  );
}
