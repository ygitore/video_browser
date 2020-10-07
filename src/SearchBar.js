import React, { Component } from 'react'

class SearchBar extends Component {
    state={term:''}
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" onChange={(e) => this.setState({term:e.target.value})} />
            </form>
        )
    }
}

export default SearchBar
