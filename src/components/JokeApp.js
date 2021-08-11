import React from 'react';

class JokeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // No joke displayed initially
            joke: '',
            // no loading notificaiton initially
            isLoading: false,
            // no dog image until render
            dogImage: '',
            // empty breeds list
            breeds: [],
            // empty categories list
            categories: [],
            breed: "",
            category: ""
        };
    }

    // Call for breeds and categories to fill dropdowns after first render
    componentDidMount() {
        this.fetchBreeds();
        this.fetchCategories();
    }

    // Get categories for dog breed dropdown menu
    fetchBreeds = () => {
        fetch("https://dog.ceo/api/breeds/list")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    breeds: data.message
                });
            });
    };

    // Get categories for joke category dropdown menu
    fetchCategories = () => {
        
        fetch("https://api.chucknorris.io/jokes/categories")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    categories: data
                });
            });
    };

    // Get joke from Chuck Norris API after button click
    _fetchJoke = () => {
        // Set loading notification to true
        this.setState({
            isLoading: true,
        }, () => {
            // Establish API url
            const url = `https://api.chucknorris.io/jokes/random?category=${this.state.category}`;
            // Fetch dog image 
            this.fetchDogImage()
            // Fetch URL
            fetch(url)
                // Convert response to JSON
                .then(response => response.json())
                // Take the API joke and set it to the value of joke in state
                // Set loading notification to false
                .then(jokeJson => {
                    this.setState({
                        joke: jokeJson.value,
                        isLoading: false
                    })
                })
        })
    }

    // Get Dog image from API after button click (called in _fetchJoke under the same onClick )
    fetchDogImage = () => {
        // Establish API url
        fetch(`https://dog.ceo/api/breed/${this.state.breed}/images/random`)
            // convert response  to JSON 
            .then((res) => res.json())
            // Save dog image to state
            .then((data) => {
                this.setState({
                    dogImage: data.message
                });
            });
    };

    
    render() {
        return (
            <div>  
                {/* Dropdown for Dog Breeds */}
                <select
                    value={this.state.breed}
                    onChange={(e) => this.setState({ breed: e.target.value })}
                >
                    <option>Select a breed</option>
                    {this.state.breeds.map((breed, index) => {
                        return <option key={index}>{breed}</option>;
                    })}
                </select>

                {/* Dropdown for Joke Categories */}
                <select
                    value={this.state.category}
                    onChange={(e) => this.setState({ category: e.target.value })}
                >
                    <option>Select a Joke Category</option>
                    {this.state.categories.map((category, index) => {
                        return <option key={index}>{category}</option>;
                    })}
                </select>

                {/* If still loading, tell user on screen, otherwise, display joke */}
                <p>{this.state.isLoading ? "Loading..."  : this.state.joke}</p>
                <p>{this.state.isLoading ? '' : <img src={this.state.dogImage} alt="Amazing Dog, such a good boy." /> }</p>
                
                {/* fetch new joke */}
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }
}

export default JokeApp;