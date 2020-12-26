async function getData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

export default getData;
