// Template literals / template syntax =>
// Using backticks( ` ${This can be pre assigned variable, some expression or function } ` )
// Also, this can be use to implement multi line strings


// let useName = "bawantha"; // normal string
// console.log(`Good morning ${useName}`); // template string danva backtick eka athule ,${} use kala uthui pita ewa danna

console.log(`there are ${24 * 60*60*365} seconda`)

function serviceCharge (amount){
    return amount * 0.1;

}
console.log(`service charge is ${serviceCharge(1360)}`);

const services =` <h2> Our services </h2>

`;
document.querySelector('.services').innerHTML = services;