function simpleAverage(...nums) {
  const sum = nums.reduce((accum, num) => {
    return accum + num
  }, 0)
  
  const average = sum / nums.length
  return average
}
console.log(simpleAverage(2, 6, 3, 7, ))


function weightedAverage(...nums){

  const sum = nums.reduce((accum, {number, weight})=> accum + (number * (weight ?? 1)), 0)
  const sumWeight = nums.reduce((accum, entry) => accum + (entry.weight ?? 1), 0 )

  return sum / sumWeight
}

console.log(weightedAverage(
  { number: 9, weight: 3 },
  { number: 7, weight: 1 },
  { number: 10, weight: 2 }
))

function calculateMedian(...nums){
 const orderedNumbers = [...nums].sort((a, b)=> a - b)
const midle = Math.floor(orderedNumbers.length / 2)
if(orderedNumbers.length % 2 !== 0 ){
  return  orderedNumbers[midle]
}
const firstMedian = orderedNumbers[midle -1]
const secondeMedian = orderedNumbers[midle]
return simpleAverage(firstMedian, secondeMedian)
}

console.log(`Mediana: ${calculateMedian(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${calculateMedian(15, 14, 8, 7, 3)}`)

function mode(...nums){
  const quantities =  nums.map(num => [
    num,
    nums.filter(n => num === n).length
  ])
  quantities.sort((a,b) => b[1] - a[1])
  return quantities [0][0]
}
