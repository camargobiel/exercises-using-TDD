/*
Create a function that takes an array of numbers
and return "Boom!" if the digit 7 appears in the array.
Otherwise, return "there is no 7 in the array".
*/

const firstExercise = (array = []) => {
  let haveSeven = 'nothing';

  array.forEach(element => {
    element === 7 ? haveSeven = 'boom' : haveSeven = 'there is no 7 in the array';
  });

  return haveSeven;
}

module.exports = { firstExercise }