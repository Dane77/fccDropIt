function dropElements(arr, func) {
  var times = arr.length;
  for (var i = 0;i < times;i++){
    if (func (arr[0])){
    break;
} else {
  arr.shift();
}
}
  return arr;
}
