
test('exemplo com jest.fn', () => {
  const funcaoFalsa = jest.fn();
  funcaoFalsa.mockReturnValue(10);

  expect(funcaoFalsa()).toBe(10);
  expect(funcaoFalsa).toHaveBeenCalled();
});