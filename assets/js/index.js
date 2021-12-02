function doAddition(firstElementID, secondElementID, sumElementID) {
  // get 'first' HTML element
  const $first = document.querySelector(firstElementID)

  // get 'second' HTML element
  const $second = document.querySelector(secondElementID)

  if ($first.value.length == 0) {
    return
  }

  if ($second.value.length == 0) {
    return
  }

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

// create a const called 'solveBtn' and assign it to the button.
const solveBtn = document.querySelector('#solve-btn')

solveBtn.addEventListener('click', solveBtnOnClick)

function solveBtnOnClick() {
  doAddition('#first', '#second', '#sum')
}

const $first = document.querySelector('#first')
const $second = document.querySelector('#second')

$first.addEventListener('blur', solveBtnOnClick)
$second.addEventListener('blur', solveBtnOnClick)
