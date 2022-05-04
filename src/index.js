function sum (a = 0, b = 0) {
  return a + b
}

function sub(a=0, b=0, c=0) {
  return a - b*c
}

const total = sum(10, 1)
console.log(sub(9, 1, 2))
console.log('total', total)
