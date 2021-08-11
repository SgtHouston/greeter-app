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
            flag: '🇺🇸',
            menuVis: false
        }
    }

    showMenu = ( ) => {
        this.setState({
            menuVis: (!this.state.menuVis)
        })
    }

    updateFlag = (newFlag) => {
        this.setState({
            flag: newFlag,
            menuVis: (!this.state.menuVis)
        })
    }

    // changeLanguageFlagJapan = () => {
    //     this.setState({
    //         flag: '🇯🇵',
    //         menuVis: (!this.state.menuVis)
    //     })
    // }

    // changeLanguageFlagGermany = () => {
    //     this.setState({
    //         flag: '🇩🇪',
    //         menuVis: (!this.state.menuVis)
    //     })
    // }


    // changeLanguageFlagChina = () => {
    //     this.setState({
    //         flag: '🇨🇳',
    //         menuVis: (!this.state.menuVis)
    //     })
    // }


    // changeLanguageFlagEspana = () => {
    //     this.setState({
    //         flag: '🇪🇸',
    //         menuVis: (!this.state.menuVis)
    //     })
    // }

    // changeLanguageFlagUSA = () => {
    //     this.setState({
    //         flag: '🇺🇸',
    //         menuVis: (!this.state.menuVis)
    //     })
    // }

    
    render() {
        return (
            <div>
                <button onClick={this.showMenu} >{this.state.flag}</button>
                <div style={{display: this.state.menuVis ? 'block' : 'none' }}>
                    <button onClick={() => { this.updateFlag('🇯🇵')}} >🇯🇵</button>
                    <button onClick={() => { this.updateFlag('🇩🇪')}} >🇩🇪</button>
                    <button onClick={() => { this.updateFlag('🇨🇳')}} >🇨🇳</button>
                    <button onClick={() => { this.updateFlag('🇪🇸')}} >🇪🇸</button>
                    <button onClick={() => { this.updateFlag('🇺🇸')}} >🇺🇸</button>
                </div>
            </div>
        )
    }
}

export default LanguagePicker