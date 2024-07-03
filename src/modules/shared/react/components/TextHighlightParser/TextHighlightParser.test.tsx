import React from "react";
import TextHighlightParser from "@root/modules/shared/react/components/TextHighlightParser/TextHighlightParser";
import { render, screen, waitFor } from "@testing-library/react";

describe("Text Highlight Parser", () => {
  let text: string;
  let highlightColor: string;

  beforeEach(() => {
    text = "Use *AI* to never miss a *receipt* again.";
    highlightColor = "text-blue-500";
  });

  // it("should render the text in div", () => {
  //   render(initComponent(text, highlightColor));

  //   expect(screen.getByText(text)).toBeInTheDocument();
  // });

  // it("should parse text with highlight", () => {
  //   const text = "Use *AI* to never miss a *receipt* again.";
  //   const highlightColor = "text-blue-500";

  //   render(initComponent(text, highlightColor));

  //   expect(screen.queryByText("AI")?.classList).toContain(highlightColor);
  //   expect(screen.queryByText("receipt")?.classList).toContain(highlightColor);
  // });

  const initComponent = (text: string, highlightColor: string) => {
    return <TextHighlightParser text={text} highLightColor={highlightColor} />;
  };
});
