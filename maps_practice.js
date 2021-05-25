/* tyler gettel
    map practice */

// const myMap = new Map();
// myMap.set(7, 'seven');
// myMap.set('7', 'seven string');

// console.log(myMap);
// console.log(myMap.get(7));

const add = (x,y) => x + y;
const mult = (x,y) => x* y;

const funcCalls = new Map();
funcCalls.set(add, 0 );
funcCalls.set(mult,0);


const bandData = [
    [3, '3 doors down'],
    ['three', 'three dog night'],
    ['nine', 'nine inch nails'],
    ['four', 'the four seasons'],
    [41, 'sum 41']
];
const bandMap = new Map(bandData);

bandMap.set(182, 'blink-182').set('twenty', 'matchbox twenty');

