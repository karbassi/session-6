function doAddition(firstElementID, secondElementID, sumElementID) {
  // get 'first' HTML element
  const $first = document.querySelector(firstElementID)

  // get 'second' HTML element
  const $second = document.querySelector(secondElementID)

  // convert strings to numbers
  const firstValue = parseFloat($first.value)
  const secondValue = parseFloat($second.value)

  // add 'first-value' and 'second-value' together
  const sum = firstValue + secondValue

  // display the sum in 'sum' HTML element

  // get 'sum' HTML element
  const $sum = document.querySelector(sumElementID)

  $sum.value = sum
}

doAddition('#first', '#second', '#sum')
