"use strict";
const calculateTotalPrice = (quantity, price, tax) => {
    const basePrice = quantity * price;
    const taxAmount = basePrice * tax;
    return basePrice + taxAmount;
};
console.log(calculateTotalPrice(10, 100, 0.1));
