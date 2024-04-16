function getData() {
  const data = localStorage.getItem("visit");
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

function saveToLs(dataStore) {
  localStorage.setItem("visit", JSON.stringify(dataStore));
}

function setData(newData) {
  const data = getData();
  data.push(newData);
  saveToLs(data);
}

function checkDataDuplicate(id) {
  const data = getData();
  for (let item of data) {
    if (item.id == id) {
      return true;
    }
  }
  return false;
}

function removeFromLs(id) {
  const data = getData();
  const Actual = data.filter((item) => item.id !== id);
  saveToLs(Actual);
}

export { getData, setData, saveToLs, checkDataDuplicate , removeFromLs};
