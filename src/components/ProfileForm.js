import React from 'react'
import Profile from './Profile'

class ProfileForm extends React.Component {
    // constructor
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            contacts: []
        }
    }
    // receives the submit event as an argument
    handleSubmit = (event) => {
        event.preventDefault();
        // Take inputs and create a new profile card
        this.setState({
        contacts: this.state.contacts.concat({
            name : this.state.firstName + ' ' + this.state.lastName,
            title : this.state.title

        })
    })


        this.setState({
            firstName: '',
            lastName: '',
            title: ''
        })
    }

    // render

    render () {
        return (
            <div>
                {/* form */}
                <form onSubmit={this.handleSubmit}>
                    {/* first name */}
                    <label> First Name <input value={this.state.firstName} onChange={(e) => this.setState ({ firstName: e.target.value})}></input> </label><br/>
                    {/* last name */}
                    <label> Last Name <input value={this.state.lastName} onChange={(e) => this.setState ({ lastName: e.target.value})}></input> </label><br/>
                    {/* title */}
                    <label> Title <input value={this.state.title} onChange={(e) => this.setState ({ title: e.target.value})}></input> </label><br/>
                    {/* submit button */}
                    <button type="submit">Add Contact </button>
                </form>
                {/* Display added contacts as Profile */}
                {this.state.contacts.map((contact, index) => {
                    return <Profile key={index} name={contact.name} title={contact.title} />
                })}
            </div>
        )
    }

}


export default ProfileForm