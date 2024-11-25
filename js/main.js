// 1)  5-ის ჯერადი

function multipleOfFive(number) {
  if (number % 5 === 0) {
    return true;
  }
  return false;
}
console.log(multipleOfFive(10));
console.log(multipleOfFive(22));

// // 2) საწყისი ფასი და ფასდაკლებული ფასი

function calculareDiscountedPrice(initialPrice, discountPercentage) {
  const discountedAmount = (initialPrice * discountPercentage) / 100;
  const finalPrice = initialPrice - discountedAmount;
  return finalPrice;
}
console.log(calculareDiscountedPrice(1000, 10));

// 3) სტრინგის ნაცვლად სიმბოლოების დაბრუნება

function getCurrencySymbolFromCode(currency) {
  switch (currency) {
    case "USD":
      return "$";
    case "EURO":
      return "€";
    case "GEL":
      return "ლ";
    default:
      return "not detected";
  }
}
console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EURO"));
console.log(getCurrencySymbolFromCode("JIM"));
console.log(getCurrencySymbolFromCode("GEL"));

// 4) upperCase სტრინგიდან lowerCase სტრინგის დაბრუნება

function changeToLowerCase(sentence) {
  return sentence.toLowerCase();
}
console.log(changeToLowerCase("MY NAME IS JANE"));

// 5) მასივის გაფილტვრა და კენტი რიცხვების დაბრუნება

function filterNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 !== 0;
  });
}
console.log(filterNumbers([1, 3, 4, 8, 9]));
