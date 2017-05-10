describe('FizzBuzz', function() {
  it('prints fizz when the number is 3', function() {
    expect(FizzBuzz(3)).toEqual('fizz')
  });

  it('prints fizz when the number is 5', function() {
    expect(FizzBuzz(5)).toEqual('buzz')
  });

  it('prints fizzbuzz when the number is 15', function() {
    expect(FizzBuzz(15)).toEqual('fizzbuzz')
  });

  it('prints the number when the number is not div by 3, 5 or 15', function() {
    expect(FizzBuzz(17)).toEqual(17)
  });
});
