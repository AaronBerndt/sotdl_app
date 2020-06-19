function filterByLevelAndName(array: any, name: string, level: number) {
  const filteredArray = array.filter(
    (value) => value.name === name && value.level <= level
  );

  return filteredArray;
}

function filterByLevelAndMutiple(array: any, nameArray: any, level: number) {
  console.log(nameArray);
  const filteredArray = nameArray
    .map((name) =>
      array.filter((value) => value.name === name && value.level <= level)
    )
    .flat(1);

  return filteredArray;
}

function filterByLevel(array: any, level: number) {
  const filteredArray = array.filter((value) => value.level <= level);

  return filteredArray;
}

function filterByNumber(array: any, number: number) {
  const filteredArray = array.filter((value) => value.level === number);

  return filteredArray;
}

export {
  filterByLevelAndName,
  filterByLevel,
  filterByNumber,
  filterByLevelAndMutiple,
};
