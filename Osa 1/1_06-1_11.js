// Full stack open 2018, osa 1, tehtävät 1.6 - 1.11
// Jussi Ruuskanen, 25.9.2018

import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistic = ({startText, value}) => (
    <tr>
        <td>{startText}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = ({good, neutral, bad}) => (
    <table>
        <tbody>
            <Statistic startText={'hyvä'} value={good}/>
            <Statistic startText={'neutraali'} value={neutral}/>
            <Statistic startText={'huono'} value={bad}/>
            <Statistic startText={'keskiarvo'} value={Math.round((good - bad) / (good + neutral + bad) * 10) / 10}/>
            <Statistic startText={'positiivisia'} value={Math.round((good) / (good + neutral + bad) * 1000) / 10 + ' %'}/>
        </tbody>
    </table> 
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    increment = (index) => {
        return () => {
            if (index === 0) {
                this.setState({good: this.state.good + 1})
            } else if (index === 1) {
                this.setState({neutral: this.state.neutral + 1})
            } else {
                this.setState({bad: this.state.bad + 1})
            }
        } 
    }
  
    render() {
        let statistics
        if (this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0) {
            statistics = <div>Palautetta ei annettu..</div>
        } else {
            statistics = <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
        }
        return (
            <div>
                <h1>anna palautetta</h1>
                <Button handleClick={this.increment(0)} text="hyvä"/>
                <Button handleClick={this.increment(1)} text="neutraali"/>
                <Button handleClick={this.increment(2)} text="huono"/>
                <h1>statistiikka</h1>
                {statistics}
            </div>
        )
    }
}
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
