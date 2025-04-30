function simpleAverage(...nums) {
  const sum = nums.reduce((accum, num) => {
    return accum + num
  }, 0)
  
  const average = sum / nums.length
  return average
}
console.log(simpleAverage(2, 6, 3, 7, 4))