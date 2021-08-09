// Fireworks

// Create a component with state that will display a button 
// and a firecracker emoji 🧨. Use state to change the 
// firecracker emoji into an explosion 💥 when it is clicked. 
// Reset it back to a firecracker on second click.


import React from 'react'

class Fireworks extends React.Component {
    constructor() {
        super()
        this.state = {
            fire: false
        }
    }

    toggleFire = () => {
        this.setState ({
            fire: !this.state.fire
        })
    }


    render() {
        return(<div>
            <button onClick={this.toggleFire}>{this.state.fire ? '🧨' : '💥'}</button>
        </div>)
    }

}





export default Fireworks