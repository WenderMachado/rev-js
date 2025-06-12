function average(...nums) {
  const total = nums.reduce((acc, num) => acc + num, 0)
  const average = total / nums.length
  return average
}

console.log(average(3, 5, 6, 7, 8)) 

function weightedAverage({...nums}){




}