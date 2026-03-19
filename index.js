function calculateTax(amount) {
  let taxValue = amount * 0.1;
  return taxValue;
}
function convertToUpperCase(text) {
  let upperCaseText = text.toUpperCase();
  return upperCaseText;
}
function findMaximum(num1, num2) {
  let maxNum = Math.max(num1, num2);
  return maxNum;
}
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

function calculateDiscountedPrice(originalPrice, discountedPercentage) {
  let discountPrice = originalPrice * (discountedPercentage / 100);
  let priceAfterDiscount = originalPrice - discountPrice;
  return priceAfterDiscount;
}

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
console.log(calculateTax(10000));
console.log(convertToUpperCase("carol"));
console.log(findMaximum(9, 6));
console.log(isPalindrome("omo"));
console.log(calculateDiscountedPrice(20000, 30));
