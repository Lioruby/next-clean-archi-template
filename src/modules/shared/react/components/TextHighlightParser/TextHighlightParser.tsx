import { classNames } from "@root/modules/shared/react/libs/utils";

export default function TextHighlightParser({
  text,
  highLightColor = "text-blue-500",
}: {
  text: string;
  highLightColor: string;
}) {
  const textArray = text.split(" ");

  return (
    <>
      {textArray.map((char, index) => {
        return (
          <>
            <span
              key={index}
              className={classNames(char.includes("*") ? highLightColor : "")}
            >
              {char.replaceAll("*", "")}
            </span>
            <span> </span>
          </>
        );
      })}
    </>
  );
}