import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { htmlData } from "../redux/dataSlice";

const Editor = () => {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const dispatch = useDispatch();

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
          dispatch(htmlData(newContent));
        }}
      />
    </div>
  );
};

export default Editor;
