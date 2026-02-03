// const number=5;
// let message;
// if (number%2===0){
//     message="even number";
// }else{
//     message="odd number";
// }
// console.log(message);
// const tmessage= number%2 ===0? "even number":"odd number";
// console.log(tmessage);



const note={
    title:"Meeting note",
    content: "discuss project roadmap",
    timestamp: Date.now(),
    isPinned: false
}
const noteText= `Title: $(note.title)
Status: ${note.isPinned ? "pinned note":"regular note"}
LastEdited: ${new Date(note.timestamp).toLocaleString()}`;
console.log(noteText);