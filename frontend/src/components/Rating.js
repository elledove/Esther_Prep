import React from 'react'
// The purpose this component is to determine the rating of a product and return the rating in a star icon form.
//The ternary operator will show a full star, a half star or an empty star
//if the rating is greater than a number from the value prop or not.
const Rating = ({value,text,color}) => {
    return (
        <div className= 'rating'>
            <span>
              <i style ={{color}}
              className={
                  value >= 1 
                  ? 'fas fa-star' 
                  : value >=0.5 
                  ? 'fas fa-star-half-alt' 
                  : 'far fa-star'}
                  ></i>
            </span>



            <span>
              <i style ={{color}}
              className={
                  value >= 2 
                  ? 'fas fa-star' 
                  : value >=1.5 
                  ? 'fas fa-star-half-alt' 
                  : 'far fa-star'}
                  ></i>
            </span>



            <span>
              <i style ={{color}}
              className={
                  value >= 3 
                  ? 'fas fa-star' 
                  : value >=2.5 
                  ? 'fas fa-star-half-alt' 
                  : 'far fa-star'}
                  ></i>
            </span>



            <span>
              <i style ={{color}}
              className={
                  value >= 4 
                  ? 'fas fa-star' 
                  : value >=3.5 
                  ? 'fas fa-star-half-alt' 
                  : 'far fa-star'}
                  ></i>
            </span>



            <span>
              <i style ={{color}}
              className={
                  value >= 5 
                  ? 'fas fa-star' 
                  : value >=4.5 
                  ? 'fas fa-star-half-alt' 
                  : 'far fa-star'}
                  ></i>
            </span>
            {' '}
            <span>{text ? text : " "}</span>
            
        </div>
    )
}
//Created a default props to color the star icons. Originally they were black.
Rating.defaultProps = {
    color : "#eb3498 "
};
export default Rating;
