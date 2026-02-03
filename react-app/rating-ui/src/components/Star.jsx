const Star = ({star, rating, hover,color, ratingClick,hovering,leaving}) => {
    return <span
    onClick={()=>ratingClick(star)}
    onMouseEnter={()=>hovering(star)}
    onMouseLeave={leaving} 
    className="star"
    style={{color: star<= (hover|| rating) ? color :'#ccc'}}
    >{'\u2605'}</span>;
}
 
export default Star;