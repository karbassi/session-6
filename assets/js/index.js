// get 'first' HTML element
const $first = document.querySelector('#first')

// get 'second' HTML element
const $second = document.querySelector('#second')

// convert strings to numbers
const firstValue = parseFloat($first.value)
const secondValue = parseFloat($second.value)

// add 'first-value' and 'second-value' together
const sum = firstValue + secondValue

// console.log(sum)

// display the sum in 'sum' HTML element

// get 'sum' HTML element
const $sum = document.querySelector('#sum')
// console.log($sum)

$sum.value = sum
