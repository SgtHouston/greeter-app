// Star Ratings

// Create and use a component that will take a number between 1 and 5 and display a star rating using emojis.

// Example: this should display ★★★☆☆

// <StarRating rating={3} />


import React from 'react'

class StarRating extends React.Component{
    render(rating){
        rating = this.props.rating

        if (rating === 1){
            return(
                <div>                                                                             
                    <span className="StarRating">★☆☆☆☆</span> 
                </div>
            )
            
        } else if (rating === 2) {
            return(
                <div>                                                                             
                    <span className="StarRating">★★☆☆☆</span> 
                </div>)
        } else if (rating === 3) {
            return(
                <div>                                                                             
                    <span className="StarRating">★★★☆☆</span> 
                </div>
            )
        } else if (rating === 4) {
            return(
                <div>                                                                             
                    <span className="StarRating">★★★★☆</span> 
                </div>
            )
        } else if (rating === 5) {
            return(
                <div>                                                                             
                    <span className="StarRating">★★★★</span> 
                </div>
            )
        } else {
            return(
                <div>                                                                             
                    <span className="StarRating">Invalid Star Number</span> 
                </div>
            )
        }
            
        
    }
}

// Step 3 - Export the component for use in app.js

export default StarRating