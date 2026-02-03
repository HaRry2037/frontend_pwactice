const rectanglearea= (width,height) => width * height;



console.log(rectanglearea(5,10));


const number=[1,2,3,4,5,6];
const double= number.map( (number) => {
   return number*2; 
});
console.log(double);

const person={
    name:"brad",
    sayHelloRegular : function(){
        console.log("regular",this.name);

    },
    sayHelloArrow: ()=>{
        console.log('Arrow',this.name);
    }
    
}
person.sayHelloArrow();
