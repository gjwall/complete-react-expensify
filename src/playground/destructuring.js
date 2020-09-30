const person = {
    name: 'Bob',
    age: 100,
    location: {
        location: 'here',
        temp: '50'
    }
};
const {name: firstName = 'Anonymous', age} = person;
console.log(`${person.name} is ${person.age}`);
console.log(`${firstName} is ${age}`);
const { location, temp: temperature} = person.location;
if(location && temperature) {
    console.log(`it is ${person.temp} in ${person.location}`);
    console.log(`it is ${temperature} in ${city}`);
}

const book = {
    title: 'Title',
    author: 'You',
    publisher: {
        name: 'XYZ'
    }
};
const {name: publisherName = 'Self published'} = book.publisher;
console.log(publisherName);
// Array destructuring
const address = ['line 1', 'line 2', 'city', 'postcode'];
const [, city = 'missing', state = 'New york'] = address;
console.log(`You are in ${address[0]} ${address[1]}`);
console.log(`You are in ${city} ${state}`);

const menu = ['Tea hot', '$2.00', '$2.50', '$2.75'];
const [item, menuPrice] = menu;
console.log(`A ${item} costs ${menuPrice}`);