let iterable = {
    a : 1,
    b : 2
}
// for (let i in iterable) {
//   console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
// }

// for (let i in iterable) {
//   if (iterable.hasOwnProperty(i)) {
//     console.log(i); // logs 0, 1, 2, "foo"
//   }
// }

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}