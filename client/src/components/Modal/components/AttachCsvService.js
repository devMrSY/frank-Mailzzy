const arrOfArrayToArrOfObject = (jsonContent) => {
  if (jsonContent) {
    const jsAsArrOfArr = JSON.parse(jsonContent);
    const objectKey = jsAsArrOfArr[0];
    const finalObject = [];
    for (let index = 1; index < jsAsArrOfArr.length; index++) {
      let currentObject = {};
      for (let innerIndex = 0; innerIndex < objectKey.length; innerIndex++) {
        currentObject[objectKey[innerIndex]] = jsAsArrOfArr[index][innerIndex];
      }
      finalObject.push(currentObject);
    }
    return [finalObject, objectKey];
  } else {
    return [{}, []];
  }
};

module.exports = { arrOfArrayToArrOfObject };
