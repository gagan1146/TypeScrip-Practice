const Palindrome = (str: string): boolean =>{
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
let arr:number[] = [1,2,3,5,7];

console.log(Palindrome("madam")); // true
console.log(Palindrome("hello")); // false