const concatArrays = (char, ...strArr) => {
  let array = [...strArr].flat();
  array = [...new Set(array)];
  array = array.filter((item) => !item.includes(char));
  array = array.map((item) => item.trimEnd());
  return array;
};

export default concatArrays;
