var dog = {"name":"mandy", "age":23};
var cat = {"name":"sizle", "age":12};

var pet = [ dog, cat ];
console.log(pet);
console.log(pet[0]);
console.log(pet[1]);

pet.push({'name':"chimp", 'age': 11});
console.log(pet);

dog.type='wild';
console.log(dog);
pet[1].type='domestic';
console.log(pet);
console.log(cat);