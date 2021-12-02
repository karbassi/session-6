function doAddition(firstElementID, secondElementID, sumElementID) {
  console.log('doAddition() called')
  console.log({ firstElementID })
  console.log({ secondElementID })
  console.log({ sumElementID })

  // get 'first' HTML element
  const $first = document.querySelector(firstElementID)

  // get 'second' HTML element
  const $second = document.querySelector(secondElementID)

  // convert strings to numbers
  const firstValue = parseFloat($first.value)
  const secondValue = parseFloat($second.value)

  // add 'first-value' and 'second-value' together
  const sum = firstValue + secondValue

  // console.log(sum)

  // display the sum in 'sum' HTML element

  // get 'sum' HTML element
  const $sum = document.querySelector(sumElementID)
  // console.log($sum)

  $sum.value = sum
}

doAddition('#f-irst', '#s-econd', '#s-um')
