import React from 'react'


class NameInput extends React.Component {
    constructor() {
        super()
        this.state = {
            textInput: ''

        }
    }

    updateGreetingValue = (field, value) => {
        this.setState({
            [field]: value,
        });
        
    }


    render() {
        return (
            <div>
                <form>
                    <input value={this.state.textInput}
                    onChange={(event) =>
                        this.updateGreetingValue("textInput", 'Hello and good day, ' + event.target.value)
                    }>

                    </input>

                    <h2>
                        {this.state.textInput}
                    </h2>
                </form>
            </div>

            // Conditional rendering ??
        )
    }
}

export default NameInput