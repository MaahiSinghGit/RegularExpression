// Welcome to Regular Expression 

// REGULAR EXPRESSION: It is used to search and replacing character in String. 'RegExp' is an object with Added properties and Method

// SYNTAX

let pattern =/abcd/i;
// abcd --> Pattern , // syntax of Regular expression, i---> case sensitive

// WE CAN MAKE PATTERN IN 2 TYPES
 let pat=/abcd/gi; // g means serch for all occernce not for first occurence

 // OR 

 let patt= new RegExp("abcd");


// CHARACTER SET
 let chr=/[abc]an/ig;
 let str="aannoj banana cannancaancaan hello word this is regex"
 const x=str.match(chr);
 console.log(x);

 //output: ['aan', 'ban', 'can', 'aan', 'aan']

// FUNCTIONS IN REG


const test="This is a test string with 1234567890 and special characters like !@#$%^&*()_+{}[]|\\;:'<>,./?"

// TEST :- check string contain pattern or not
let reg=/[A-Z]/g

console.log(reg.test(test))

// Outuput: True;




// EXCES :return first occurence and its detail in array

let reg2=/123/g
console.log(reg2.exec(test));

// Output: ['123', index: 27, input: 'This is a test string with 1234567890 and spe…l characters like !@#$%^&*()_+{}[]|\;:'<>,./?', groups: undefined]




// MATCH : return all the matching pattern in array formate

let reg3=/st/g
console.log(test.match(reg3))

// Output: ['st', 'st']


// Replace: Replace pattern with given pattern 

let reg4=/string/g
console.log(test.replace(reg4,'Set Of Character'))

//Output: This is a test Set Of Character with 1234567890 and special characters like !@#$%^&*()_+{}[]|\;:'<>,./?



// SEARCH: using this method it return first index of the match


const reg5=/w/g
console.log(test.search(reg5));

//Output:22




//Split: using this method we split the string into array of string

const reg6=/s/g
console.log(test.split(reg6))

//Output:['Thi', ' i', ' a te', 't ', 'tring with 1234567890 and ', 'pecial character', ' like !@#$%^&*()_+{}[]|\;:'<>,./?']


// QUANTIFIERS
let testt="!@#$%^&*()_+-={}|[]\:;'<>,.? This is a test string with characters, strings, digits, and special characters.1234567890"

const a="ab",b="abc",c="abbc", d="abbbc", e="abbbbc"

// * (zero or more)
let regg=/ab*c/i;
console.log(reg.testt(a))
console.log(reg.testt(b))
console.log(reg.testt(c))
console.log(reg.testt(d))
console.log(reg.testt(e))

// OUTPUT false true true true true



// + (One or more)
let reg1=/ab+c/i;
console.log(reg1.test(a))
console.log(reg1.test(b))
console.log(reg1.test(c))
console.log(reg1.test(d))
console.log(reg1.test(e))

// Output false true true true true


// ? (zero or one)


let regg2=/ab?c/i;
console.log(reg2.test(a))
console.log(reg2.test(b))
console.log(reg2.test(c))
console.log(reg2.test(d))
console.log(reg2.test(e))




{n} (exact n number)
let regg3=/ab{2}c/i;
console.log(reg3.test(a))
console.log(reg3.test(b))
console.log(reg3.test(c))
console.log(reg3.test(d))
console.log(reg3.test(e))


//{n,} (n or more)
let regg4=/ab{2,}c/i;
console.log(reg4.test(a))
console.log(reg4.test(b))
console.log(reg4.test(c))
console.log(reg4.test(d))
console.log(reg4.test(e))


// {m,n} (between m to n)

let regg5=/ab{1,2}c/i;
console.log(reg5.test(a))
console.log(reg5.test(b))
console.log(reg5.test(c))
console.log(reg5.test(d))
console.log(reg5.test(e))



