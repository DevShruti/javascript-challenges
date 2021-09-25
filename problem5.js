// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

const is_leapyear = year => new Date(year, 1, 29).getMonth() === 1;
console.log(is_leapyear(2016));
console.log(is_leapyear(2000));
console.log(is_leapyear(1700));
console.log(is_leapyear(1800));
console.log(is_leapyear(100));