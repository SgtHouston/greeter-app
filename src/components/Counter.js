// Step 1 for a new component - npm start
import React from 'react'

// Step 2 - Write code for component
// props passed into the function are similar to html classes and labels that you put on htmltags

// class based component
class Counter extends React.Component {
    // Props get passed into the constructor of the class
    constructor(props) {
        // Super calls the constructor of the parent class.  
        // In this case it calls the React component 
        // constuctor so it renders correctly
        super(props)
        this.state = {
            count: 0
        }
    }

    // Arrow function!  To make the button click and update with set or conditional criteria (Like Button)

    handleClickUp = () => {
        this.setState ({
            // setting this' attributes
            count: this.state.count + 1
        });
    }

    
    handleClickDown = () => {
        
        this.setState ({
            // setting this' attributes
            count: this.state.count - 1
        })
    }



    render() {
        return (
            // needs "this.props" instead of props (above) to refer to the object itself
            <div>                                                                             
                <span className="first-word">Hello </span> {this.props.name || 'world'}!
                <button onClick={this.handleClickUp}>➕</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleClickDown}>➖</button>
            </div>
        )
    }
}


// Step 3 - Export the component for use in app.js
export default Counter

