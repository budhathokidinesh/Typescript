const calculateTotalPrice = (
  quantity: number,
  price: number,
  tax: number
): number => {
  const basePrice = quantity * price;
  const taxAmount = basePrice * tax;
  return basePrice + taxAmount;
};
console.log(calculateTotalPrice(10, 100, 0.1));
