import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

const Rating = ({heading= "rate your experience", color="gold",feedbackMessages=['Terrible','Bad','Fair','Good','Excellent']}) => {
const stars=Array.from({length:5},(_,i)=>i+1);
const [rating,setRating]= useState(0);
const [hover,setHover]= useState(0);
const [submitted,setSubmitted]=useState(false);
const handleSubmit=()=>{
if(rating>0){
    setSubmitted(true);
}
};
const closeModal=()=>{
    setSubmitted(false);
    setRating(0);
    setHover(0);
};
    return ( <div className="rating-container" >
    <h2 >{heading} </h2>
    <p></p>
    <div className="stars">
        { stars.map((star)=>(
        <Star
        key={star}
        star={star}
        rating={rating}
        hover={hover}
        color={color}
        ratingClick={setRating}
        hovering={setHover}
        leaving={()=>setHover(null)}
          />
))}
    </div>
    
    {rating>0 && <p className="feedback">{feedbackMessages[rating-1]}</p>}
    {/* <button className="submit-btn" 
    onClick={handleSubmit}
    disabled={rating===0}
    >Submitted</button> */}
   <Button 
    className="submit-btn"
    disabled={rating===0}
    onClick={handleSubmit}
    >Submit</Button>
   {/* {Modal} */}
  <Modal isOpen={submitted} onClose={closeModal} 
  rating={rating}
  />
    </div> );

}
;
 
export default Rating;