import { useEffect, useState } from "react";

const defaultEmptyString = (value) => {
  return value || "";
};

const isPositiveNumber = (value) => {
  return typeof value === "number" && value > 0;
};

const pxValue = (value) => {
  return !!value ? `${value}px` : "";
};

const resizeLimt = 10;
const calculateResizedHeight = (current, line, scroll, max, pad) => {
  let height = current;
  if (isPositiveNumber(max) && (scroll > max)) {
    height = max;
  } else {
    let cnt = 0;
    const limit = scroll - (isPositiveNumber(pad) ? (pad) * 2 : 0);
    while (height < limit && cnt < resizeLimt) {
      height += line;
      cnt++;
    }
    if (isPositiveNumber(max) && height > max) {
      height = max;
    }
  }
  return height;
};

const App = ({
  defaultText = "",
  label = "",
  lineHeight = 18,
  padding = 8,
  placeholder = "",
  rows = 1,
  rowsMax = 7,
  rowsMin = 3,
  width = 300,
}) => {
  const [height, setHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setText(defaultEmptyString(defaultText));
  }, [defaultText]);

  useEffect(() => {
    if (isPositiveNumber(lineHeight) && isPositiveNumber(rows)) {
      const value = lineHeight * rows;
      setHeight(defaultEmptyString(value));
    }
  }, [lineHeight, rows]);

  useEffect(() => {
    if (isPositiveNumber(lineHeight) && isPositiveNumber(rowsMax)) {
      const value = lineHeight * rowsMax;
      setMaxHeight(defaultEmptyString(value));
    }
  }, [lineHeight, rowsMax]);

  useEffect(() => {
    if (isPositiveNumber(lineHeight) && isPositiveNumber(rowsMin)) {
      const value = lineHeight * rowsMin;
      setMinHeight(defaultEmptyString(value));
    }
  }, [lineHeight, rowsMin]);

  const handleChange = (e) => {
    setText(defaultEmptyString(e?.target?.value));
    const clientHeight = e?.target?.clientHeight || NaN;
    const scrollHeight = e?.target?.scrollHeight || NaN;
    if (scrollHeight > clientHeight) {
      const newHeight = calculateResizedHeight(clientHeight, lineHeight, scrollHeight, maxHeight, padding);
      setHeight(newHeight);
    }
  };

  return (
    <div className="root">
      <textarea
        onChange={handleChange}
        placeholder={!label ? defaultEmptyString(placeholder) : ""}
        style={{
          height: pxValue(height),
          lineHeight: pxValue(lineHeight),
          maxHeight: pxValue(maxHeight),
          minHeight: pxValue(minHeight),
          padding: pxValue(padding),
          resize: "vertical",
          width: pxValue(width),
        }}
        value={text} />
    </div>
  );
};

export default App;
