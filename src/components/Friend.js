// Friend

// Create and use a component that takes a friendName prop and displays the text 'is my friend!' after the name.

// Example: this should display "Bob Belcher is my friend!"

// <Friend friendName="Bob Belcher" />



import React from 'react'

class Friend extends React.Component {


    render(){
        return(
        <div>                                                                             
            <span className="friendName">{this.props.friendName} is my friend </span> 
        </div>
        )
        
    }
}



// Step 3 - Export the component for use in app.js
export default Friend