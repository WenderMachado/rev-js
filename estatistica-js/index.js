function simpleAverage(...nums) {
  const sum = nums.reduce((accum, num) => {
    return accum + num
  }, 0)
  
  const average = sum / nums.length
  return average
}
console.log(simpleAverage(2, 6, 3, 7, ))


function weightedAverage(...nums){

  const sum = nums.reduce((accum, {number, weight})=> accum + (number * weight), 0)
  const sumWeight = nums.reduce((accum, entry) => accum + entry.weight, 0 )

  return sum / sumWeight
}

console.log(weightedAverage(
  { number: 9, weight: 3 },
  { number: 7, weight: 1 },
  { number: 10, weight: 2 }
))