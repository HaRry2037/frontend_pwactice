const user ={
    name:'Brad',

};
console.log(user.address?.city);

let value=0;

let result= value ?? 'Default value';
console.log(result);

console.log(user.address?.city?? 'not provided')

