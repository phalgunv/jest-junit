const sum = require('./sum');

describe('addition', () => {
  describe('positive numbers', () => {
    it('should add up', () => {
      expect(1 + 2).toBe(3);
    });
  });
});

describe('subraction', () => {
  describe('positive numbers', () => {
    it('should subtract', () => {
      expect(2 - 1).toBe(1);
    });
  });
});
