// Step 1 Import react from react
import React from 'react'

// Step 2 - Write code for component
// props passed into the function are similar to html classes and labels that you put on htmltags
class TimeStamp extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }



    getMonth(month) {
        const months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return months[month]
    }

    getSuffix(day) {
        let suffix = 'th'
        if (day === 1 || day === 21 || day === 31) {
            suffix = 'st'
        } else if (day === 2 || day === 22) {
            suffix = 'nd'
        } else if (day === 3 || day === 23) {
            suffix = 'rd'
        }
        return suffix
    }

    updateTime = () => {
        this.setState ({
            // setting this' attributes
            date: new Date()
        })
    }

    render() {
        const date = this.state.date
        const time = date.toLocaleTimeString()
        const month = date.getMonth()
        const day = date.getDate()
        const suffix = this.getSuffix(day)
        
        return (
            // needs "this.props" instead of props (above) to refer to the object itself
            <div>                                                                             
                <span className="timestamp">Time:</span> 
                <div>{this.getMonth(month)} {day}{suffix}, {time}</div>
                <button onClick={this.updateTime}>⏱</button>
            </div>   
        )
    }  
}


// Step 3 - Export the component for use in app.js
export default TimeStamp


