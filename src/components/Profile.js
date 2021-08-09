// Profile Card

// Create and use a component that takes a Name and a Title and displays a card like the image below. You will need to add CSS for this to style correctly.

// <Profile name="Tony Stark" title="Owner Operator" />


import React from 'react'
import '../componentcss/profile.css'

class Profile extends React.Component{
    render(name, title) {
        name = this.props.name
        const names = name.split(" ")
        const fname = names[0]
        const lname = names.splice(1).join(" ")
        title = this.props.title

        return(
            <div className="Profile"> 
                <div className ="card1">
                    <span class="dot">{fname[0]}{lname[0]}</span>
                </div>
                <div className ="card2">
                    <div className="fullname">{fname} {lname}</div>
                    <div className="title">{title}</div> 
                </div>                                                                           
                
            </div>
        )

    }
}









// Step 3 - Export the component for use in app.js
export default Profile