const name='John';
const age=19;
const greeting=`Hello, my name is ${name} and i am ${age} `;
console.log(greeting);

const formatdate = (timestamp)=>{
const date= new Date(timestamp);
return `${date.toLocaleDateString()}  at  ${date.toLocaleTimeString()}`;
};

const note= {
    title: "Discuss Project",
    timestamp: Date.now()
}

console.log(`Last edited ${formatdate(note.timestamp)}`)