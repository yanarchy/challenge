describe('everything testing', function () {
  describe('a function', function () {
    it('should work hopefully', function () {
      var subtotal = 10;
      var tip = subtotal * .2;
      var tax = subtotal * .08;
      var total = 10 + tip + tax;
      expect(billTotal(subtotal)).toBe(total);
    });
  });

  describe('another function', function () {
    it('should work', function () {
      expect(1).toBe(1);
    });
  });
})
