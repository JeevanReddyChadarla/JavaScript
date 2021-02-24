var char = ['Jeevan','Chadarla','Reddy','Cognizant'];

console.log(char.length);
console.log(char[char.length-1]);
console.log(char);

// add => .push() in end
// add => .unshift() in start
// remove => .pop() in end
// remove => .shift() in start

char.push('Tirupati');
char.push('India');
console.log(char);

char.pop();

console.log(char);


char.unshift('1998');
char.unshift('Andhra');
console.log(char);

char.shift();
char.shift();
console.log(char);

// replace => .splice(from, number of elements to replace, new elements)
// remove => .splice(from, number of elements to remove)


var newarr = ['cadbury','eclarse','milkybar','nestley','5star'];
console.log(newarr);
newarr.splice(1,3,'banana','apple')
console.log(newarr);
newarr.splice(2,3)
console.log(newarr);


// ascending order => .sort
// reverse elements => .reverse

let otherarr = ['India','England','Usa','Russia'];
otherarr.reverse();
console.log(otherarr);
otherarr.sort();
console.log(otherarr);

// .indexof
let newotherarr = ['Hyd','Che','Ban','Mum','Koc','Mum','Ban']
const place = newotherarr.indexOf('Ban')
const place2 = newotherarr.lastIndexOf('Mum')
console.log(place);
console.log(place2);