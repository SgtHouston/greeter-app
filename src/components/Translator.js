// Step 1 Import react from react
import React from 'react'
import rot13 from 'rot-thirteen'

// Step 2 - Write code for component
// props passed into the function are similar to html classes and labels that you put on htmltags
class Translator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.initialText || '',
            translated: rot13(props.initialText)
        }
    }

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value,
            translated: rot13(event.target.value)
        })
    }

    render(){
        return (
        <div>
            {this.state.translated}<br/>
            <input type="text" 
            onChange={this.handleTextChange} 
            value={this.state.text}/>
        </div>)
    }

}

// Step 3 - Export the component for use in app.js
export default Translator