// Language Picker
// Create a component that shows a button with a flag emoji. 
// When the button is clicked, show 4 more flags below. 
// When one of new flags is picked, change the flag on the button 
// to the one that was just picked.

// Below are some flag emojis that you can copy/paste but there are more available at Emojipedia
// 🇬🇧🇰🇷🇯🇵🇨🇳🇪🇸🇲🇽🇩🇪🇨🇭🇫🇷🇮🇹

import React from 'react'


class LanguagePicker extends React.Component {
    constructor() {
        super()
        this.state = {
            flag: '🇺🇸'
        }
    }

    changeFlag = () => {
        
    }

    changeLanguageFlagJapan = () => {
        this.setState({
            flag: '🇯🇵'
        })
    }

    changeLanguageFlagGermany = () => {
        this.setState({
            flag: '🇩🇪'
        })
    }


    changeLanguageFlagChina = () => {
        this.setState({
            flag: '🇨🇳'
        })
    }


    changeLanguageFlagEspana = () => {
        this.setState({
            flag: '🇪🇸'
        })
    }

    // Need dropdown menu???
    render() {
        return (
            <div>
                <button onClick={this.changeFlag} className="display-none">{this.state.flag}</button>
            </div>
        )
    }
}

export default LanguagePicker