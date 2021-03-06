// Counter
// Create a component that displays a number (start at 0) and has 4 buttons:

// + 1
// + 10
// - 10
// - 1
// Make each button increase or decrease the number according to its face value


// Alternative button click alternative below !!!!!!!!!!!!!!

import React from 'react'

class SuperCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClickUp = () => {
        this.setState({
            // setting this' attributes
            count: this.state.count + 1
        });
    }

    handleClickUp10 = () => {
        this.setState({
            // setting this' attributes
            count: this.state.count + 10
        });
    }

    handleClickDown = () => {
        this.setState({
            // setting this' attributes
            count: this.state.count - 1
        });
    }

    handleClickDown10 = () => {
        this.setState({
            // setting this' attributes
            count: this.state.count - 10
        });
    }

    render() {
        return (
            // needs "this.props" 
            <div>
                <button onClick={this.handleClickUp}>➕ 1</button>
                <button onClick={this.handleClickUp10}>➕ 10</button>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClickDown}>➖ 1</button>
                <button onClick={this.handleClickDown10}>➖ 10</button>
            </div>

        )
    }



}

export default SuperCounter


// class Counter extends React.Component {
// constructor() {
//     super();
//     this.state = {
//         count: 42
//     };
// }

// updateCount = (count) => {
//     this.setState({
//         count: this.state.count + count
//     });
// };

// render() {
//     return (
//         <div className="Counter">
//             <button>-1</button>
//             <button onClick={() => { this.updateCount(-10); }} >
//                 -10
//             </button>
//             <span>{this.state.count}</span>
//             <button
//                 onClick={() => {
//                     this.updateCount(10);
//                 }}
//             >
//                 +10
//             </button>
//             <button>+1</button>
//         </div>
//     );
// }
// }

// export default Counter;
