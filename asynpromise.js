// const myPromise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         reject('promise rejected')
//     },2000)
// });

// myPromise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error)
// });



// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response)=> response.json())
// .then((data)=> console.log(data))

// .catch((error)=>console.log(error))
// ;
const fetchData= async () =>{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data= await response.json();
    console.log(data);
};


fetchData();