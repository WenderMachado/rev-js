function average(...nums) {
  const total = nums.reduce((acc, num) => acc + num, 0)
  const average = total / nums.length
  return average
}

console.log(average(3, 5, 6, 7, 8)) 

function weightedAverage(...nums){

  const total = nums.reduce((acc, {number, weigt}) => acc + (number * (weigt ?? 1)), 0)
  const weightSum = nums.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
  return total / weightSum

}

console.log(`Média Ponderada: ${weightedAverage(
  { number: 9, weight: 3 },
  { number: 7 },
  { number: 10, weight: 1 },
)}`)

const median = (...numbers) =>{
  const orderedNumbers = [...numbers].sort((a,b)=> a - b)
  const middle = Math.floor(orderedNumbers.length / 2)

   if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }
  const firstMedian = orderedNumbers[middle - 1]
  const secondMedian = orderedNumbers[middle]
  return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)