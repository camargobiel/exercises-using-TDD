const { firstExercise } = require('./index');

describe('first exercise', () => {
  it('function firstExercise() should exists', () => {
    expect(firstExercise()).toBeTruthy();
  });

  it('function firstExercise() should return boom if has 7 in the array', () => {
    expect(firstExercise([1, 2, 7])).toStrictEqual('boom');
  });

  it('function firstExercise() should return a message if not has 7 in the array', () => {
    expect(firstExercise([1, 2, 3])).toStrictEqual('there is no 7 in the array');
  });
});