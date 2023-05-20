import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { htmlData } from "../redux/dataSlice";

const Editor = () => {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  // const dispatch = useDispatch(htmlData(content));
  const csvDataFromRedux = useSelector((state) => state.data.csvData);
  const csvHeader = csvDataFromRedux ? csvDataFromRedux[0] : {};

  console.log(csvDataFromRedux);
  console.log(csvHeader);

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        // config={config}
        tabIndex={1}
        // onBlur={(newContent) => {
        //   setContent(newContent);
        // }}
        onChange={(newContent) => {
          setContent(newContent);
          // dispatch(htmlData(newContent));
        }}
      />
      {content}
    </div>
  );
};

export default Editor;
