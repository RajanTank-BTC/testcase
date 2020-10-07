
jest.useFakeTimers()

test('calls the callback after 1 second', () => {
  const timerGame = require('../timerGame').default;
  const callback = jest.fn();
  timerGame(callback);
  // this point callback in not called 
  expect(callback).not.toBeCalled();

  // all timer run 
  jest.runAllTimers();

  // all callback called now 
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});