import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { templatedata } from "../../redux/dataSlice";

const TemplatePreview = () => {
  // const [finalTemplate, setFinalTemplate] = useState("");
  const headerFromRedux = useSelector((state) => state.data.csvHeader);
  const htmlRawFromRedux = useSelector((state) => state.data.htmlData);
  const csvDataFromRedux = useSelector((state) => state.data.csvData);

  const dispatch = useDispatch();

  useEffect(() => {
    rawToFinalTemplate();
  }, []);

  const rawToFinalTemplate = () => {
    let updatedRawHtml = htmlRawFromRedux;
    const csvData = csvDataFromRedux ? csvDataFromRedux[0] : {};
    for (let index = 0; index < headerFromRedux.length; index++) {
      updatedRawHtml = updatedRawHtml.replace(
        `{{${headerFromRedux[index]}}}`,
        csvData[headerFromRedux[index]]
      );
    }
    // setFinalTemplate(updatedRawHtml);
    dispatch(templatedata(updatedRawHtml));
    const templateParentDiv = document.getElementById("finalTemplate");
    templateParentDiv.innerHTML = updatedRawHtml;
  };

  return <div id='finalTemplate'></div>;
};

export default TemplatePreview;
