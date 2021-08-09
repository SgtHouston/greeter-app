// Name Field

// Create and use a component that takes a firstName and a lastName prop and displays the first initial and last name on the page.

// Example, This component should display 'S. Rogers' on the page.

// <Name firstName="Steve" lastName="Rogers" />

import React from 'react'

class Name extends React.Component{
    render(){
        return(
            
            <div>                                                                             
                <span className="namefield">{this.props.firstName[0] || ''}. {this.props.lastName || ''} </span> 
            </div>
        )
    }
}

// Step 3 - Export the component for use in app.js
export default Name