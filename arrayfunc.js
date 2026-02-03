const notes =[
{title: "meeting notes", content:"discuss project roadmap", isPinned:true},
{title:"Grocery List", content:"buy milk egg and bread", isPinned:false},
{title:"workout plan", content:"pushday: bench , shoulder press", isPinned:true},
{title: "receipe ideas", content:"Pasta salsa tacos", isPinned:false}

];

const noteTitles = notes.map((note,index)=> `${index+1}  ${note.title}`);
console.log(noteTitles);
const filteredNotes= notes.filter((notes)=>notes.isPinned).map((notes)=> notes.title);
console.log(filteredNotes);
const number=[1,2,3,4,5,6];
const sum= number.reduce((total,number)=> total+number,0);
console.log(sum);

