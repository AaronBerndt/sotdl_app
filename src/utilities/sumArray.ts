function sumArray(array: any) {
  return array.reduce(
    (previousValue: number, currentValue: number) =>
      currentValue + previousValue,
    0
  );
}

export default sumArray;
