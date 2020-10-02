exports.min = function min(array) {
  if (array !== undefined && array.length !== 0) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
  if (max > array[i]) {
  max = array[i];
  } else {
  console.log(max);
  }
  }
  return max;
  } else {
  return 0;
  }
  };
  
  exports.max = function max(array) {
  if (array !== undefined && array.length !== 0) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
  if (max < array[i]) {
  max = array[i];
  } else {
  console.log(max);
  }
  }
  return max;
  } else {
  return 0;
  }
  };
  
  exports.avg = function avg(array) {
  if (array !== undefined && array.length !== 0) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
  result += array[i];
  }
  return result / array.length;
  } else {
  return 0;
  }
  };