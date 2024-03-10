let array = [11,12,13,16,165]

// console.log(array.join("-"))

console.log(array.pop())
console.log(array)
console.log(array.push('arjun'))
console.log(array)
array.push(98)      
console.log(array)
 array.shift()        //he pop ka bhai hota hai jo start element ko delete karta hai
console.log(array)
array.unshift(298)
console.log(array)        //or hai push ka bhai jo element start mai add karta hai

delete array[2]
console.log(array)      // delete the value but not the memory