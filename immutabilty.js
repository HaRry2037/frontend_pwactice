const notes=['Meeting notes','Grocery List'];
notes.push('workout plan');
const newNotes= notes.map((notes)=>notes==='Grocery List'? 'Shopping List': notes);
console.log(notes);
console.log(newNotes);
const user={
    name:'John Doe',
    age: 30
};
console.log(user);

const newUser={
    ...user,
    age: 42
};
console.log(newUser);