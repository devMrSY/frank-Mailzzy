import React, { useState } from "react";
import Papa from "papaparse";
import { arrOfArrayToArrOfObject } from "./AttachCsvService";
import { useDispatch, useSelector } from "react-redux";
import { csvData, csvHeader } from "../../redux/dataSlice";

const AttachCsv = () => {
  const [csvContent, setCSVContent] = useState("");
  const [jsonContent, setJSONContent] = useState("");

  const dispatch = useDispatch();

  const handleCSVInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      setCSVContent(contents);
    };

    reader.readAsText(file);
  };

  const setHeaderAndSCsvData = (inputData) => {
    const [finalObject, objectKey] = arrOfArrayToArrOfObject(
      JSON.stringify(inputData)
    );
    dispatch(csvData(finalObject));
    dispatch(csvHeader(objectKey));
  };

  const convertToJSON = () => {
    Papa.parse(csvContent, {
      complete: (result) => {
        setJSONContent(JSON.stringify(result.data, null, 2));
        setHeaderAndSCsvData(result.data);
      },
    });
  };

  return (
    <div>
      <h2>CSV to JSON Converter</h2>
      <input type='file' onChange={handleCSVInputChange} />
      <button onClick={convertToJSON}>Convert</button>
      {jsonContent && (
        <pre>
          {JSON.stringify(arrOfArrayToArrOfObject(jsonContent), null, 2)}
        </pre>
      )}
    </div>
  );
};

export default AttachCsv;
