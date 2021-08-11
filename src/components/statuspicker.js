// Status Picker

// Create a component that shows the word 'Active' on the screen inside an H2 tag. Below that, display three buttons:

// Active
// Away
// Offline
// When any of the buttons are clicked, update the word in the H2 tag to whichever button was clicked.

import React from 'react'


class StatusPicker extends React.Component {
    constructor () {
        super()
        this.state = {
            status: 'Active'
        }

    }

    updateStatus = (newStatus) => {
        
        this.setState({
            status: newStatus
        });
    };

    // setActive = () =>{
    //     this.setState ({
    //         // setting this' attributes
    //         status: 'Active'
    //     });
    // }

    // setAway = () => {
    //     this.setState ({
    //         // setting this' attributes
    //         status: 'Away'
    //     });
    // }

    // setOffline = () => {
    //     this.setState ({
    //         // setting this' attributes
    //         status: 'Offline'
    //     });
    // }
    render() {
        return(
            <div>
                <h2>{this.state.status}</h2> 
                <button onClick={() => { this.updateStatus('Active');   }}>Active</button>
                <button onClick={() => { this.updateStatus('Away');     }}>Away</button>
                <button onClick={() => { this.updateStatus('Offline');  }}>Offline</button>
            </div>
        )
    }
}





export default StatusPicker