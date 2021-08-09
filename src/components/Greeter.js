// Step 1 for a new component - npm start
import React from 'react'

// Step 2 - Write code for component
// props passed into the function are similar to html classes and labels that you put on htmltags

// function based component
// function Greeter(props) {
//     console.log(props)
//     return(
//         // Turnery statement allows us to choose between options without if/else loops. 
//         <div>                                                                             
//             <span className="first-word">Hello </span>{props.name ? props.name : 'world'}!
//         </div>
//     );
// }


// class based component
class Greeter extends React.Component {
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
            count: this.state.count + 1
        });
    }
    // Render function 
    render() {
        return (
            // needs "this.props" instead of props (above) to refer to the object itself
            <div>                                                                             
                <span className="first-word">Hello </span> {this.props.name || 'world'}!
                <button onClick={this.handleClickUp}>👍</button>
                <span>{this.state.count}</span>
            </div>
        )
    }
}


// Step 3 - Export the component for use in app.js
export default Greeter

