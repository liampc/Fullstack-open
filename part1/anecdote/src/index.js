import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Anecdote = (props) => {
    return (
    <div>{props.anecdotes}</div>
    )
}

const Button = ({handleClick, text}) => {
    return (
    <button onClick={handleClick}>{text}</button>
    )
}

const Votes = ({total}) => {
    return (
    <p> Has {total} votes</p>
    )
}


const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState( new Uint8Array(6))

    const clickNext = () => {
        setSelected(
            Math.floor(Math.random() * anecdotes.length)
        )
        console.log(selected)
    }

    const clickVote = () => {
        const copy = [...vote]
        copy[selected] += 1
        setVote(copy)
    }

    return (
        <div>
            <Anecdote anecdotes={anecdotes[selected]} />
            <Votes total={vote[selected]} />
            <Button handleClick={clickNext} text={'next anecdote'}/>
            <Button handleClick={clickVote} text={'vote'}/>
            
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'))