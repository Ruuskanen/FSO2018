// Full stack open 2018, osa 1, tehtävät 1.12 - 1.14
// Jussi Ruuskanen, 27.9.2018

import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: [0]
        }
    }

    randomAnecdote = () => {
        return () => {
            this.setState({selected: Math.floor(Math.random() * anecdotes.length)})
        }
    }

    highestVoteIndex = () => {
        let highestVoteIndex = 0
        for (let i = 0; i < this.state.votes.length; i++) {
            if (this.state.votes[i] > this.state.votes[highestVoteIndex]) {
                highestVoteIndex = i
            }
        }
        return highestVoteIndex
    }

    vote = () => {
        return () => {
            const copy = [...this.state.votes]
            if (copy[this.state.selected] === undefined) {
                copy[this.state.selected] = 0
            }
            copy[this.state.selected] += 1
            this.setState({votes: copy})
        }
    }

    render() {
        let selectedVoteNumber = this.state.votes[this.state.selected] === undefined ? 0 : this.state.votes[this.state.selected]
        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <p>{"has " + selectedVoteNumber + " votes"}</p>
                <Button handleClick={this.vote()} text="Vote"/>
                <Button handleClick={this.randomAnecdote()} text="Next anecdote"/>
                <h1>anecdote with most votes:</h1>
                <p>{this.props.anecdotes[this.highestVoteIndex()]}</p>
                <p>{"has " + this.state.votes[this.highestVoteIndex()] + " votes"}</p>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
