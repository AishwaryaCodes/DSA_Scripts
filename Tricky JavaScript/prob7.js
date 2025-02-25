// 1. Comparison using == and ===
console.log([] == []);       // [] == []: false - comparing different references.
//console.log([] === []);      // [] === []: false - comparing different references with strict equality.
console.log([] == ![]);      // [] == ![]: true - type coercion makes both [] and ![] equal (empty string).

// 2. Null vs Undefined
console.log(null == undefined);   // true - loose equality allows null and undefined to be equal.
console.log(null === undefined);  // false - strict equality does not consider null and undefined the same.

// 3. Zero and -Zero
console.log(0 === -0);  // true - both 0 and -0 are considered equal.
console.log(-0 === 0);  // true - same as above.

// 4. NaN and isNaN
console.log(NaN === NaN);   // false - NaN is not equal to itself.
console.log(isNaN(NaN));            // true - isNaN function identifies NaN.
console.log(Number.isNaN(NaN));     // true - stricter check for NaN.

// 5. Infinity and -Infinity
console.log(1 / 0);    // Infinity - dividing by zero results in Infinity.
console.log(1 / -0);   // -Infinity - dividing by negative zero results in negative Infinity.

// 6. Coercion and comparison of falsy values
console.log(0 == false);    // true - 0 is coerced to false.
console.log(0 === false);   // false - strict equality, different types (number vs boolean).
console.log(0 == "");       // true - 0 coerces to empty string "".
console.log(false == "");   // true - false coerces to empty string "".

// 7. Special arithmetic with non-numeric values
console.log(undefined - null); // -> NaN - subtraction of undefined and null results in NaN.
console.log('abc' * undefined); // -> NaN - multiplying a string by undefined results in NaN.
console.log(9 % null); // -> NaN - modulo with null results in NaN.
console.log(null + 4); // -> 4 - null coerces to 0 in addition.
console.log(null - 7);     // -> -7 - null coerces to 0 in subtraction.
console.log('abc' + null); // -> 'abcnull' - null coerced to string and concatenated.
console.log(20 + 'abc');   // -> '20abc' - number coerced to string and concatenated.
console.log(9 + true);     // -> 10 - true coerces to 1, so result is 9 + 1.

// 8. String to number coercion
console.log('5' - 3); // 2 - '5' coerced to 5 for subtraction.
console.log('5' * 3); // 15 - '5' coerced to 5 for multiplication.

// 9. Parsing strings to numbers
console.log(parseInt("123px")); // 123 - parseInt extracts the integer part.
console.log(parseFloat("12.3")); // 12.3 - parseFloat parses floating-point numbers.

// 10. Boolean coercion
console.log(Boolean("")); // false - empty string coerces to false.
console.log(!!"Hello"); // true - double negation coerces to true.
console.log(!!0); // false - 0 coerces to false.

// 11. Logical NOT (Negation)
console.log(!false);      // -> true
console.log(!'');         // -> true
console.log(!0);          // -> true
console.log(!null);       // -> true
console.log(!undefined);  // -> true
console.log(!NaN);        // -> true

// Truthy values become false with negation
console.log(!true);      // -> false
console.log(!1);         // -> false
console.log(!'abc');     // -> false
console.log(!9999999);   // -> false
console.log(!'ha*UIHJ'); // -> false

// 12. Inequality comparison
console.log(5 != "5"); // false - values are equal after coercion (both 5).
console.log(5 !== "5"); // true - strict inequality, values differ in type.
