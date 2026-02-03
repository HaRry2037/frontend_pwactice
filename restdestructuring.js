const notes =[
{title: "meeting notes", content:"discuss project roadmap"},
{title:"Grocery List", content:"buy milk egg and bread"},
{title:"workout plan", content:"pushday: bench , shoulder press"},
{title: "receipe ideas", content:"Pasta salsa tacos"}

];

const [firstNotes, ...othernotes]=notes;
console.log(firstNotes);
console.log(othernotes);


const note = {
    title : 'Meeting Notes',
    content : 'Discuss project roadmap',
    isPinned: 'true'
};

// object
const {title: noteTitle,isPinned}=note;

console.log(isPinned);
console.log(noteTitle);



function NoteCard(props){
    props.title

}



const user ={
    name: 'ben',
    address:{city:'boston', state:'Ma'}
}
const {name, address:{city,state}} = user;
console.log(city,state);