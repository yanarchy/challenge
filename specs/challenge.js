describe('a function', function () {
  it('should work hopefully', function () {
    var subtotal = 10;
    var tip = subtotal * .2;
    var tax = subtotal * .08;
    var total = 10 + tip + tax;
    expect(billTotal(subtotal)).toBe(total);
  });
});
