import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({score, text}) => {
  return (
     <button onClick={score}> {text} </button>
  )
}
  
const Numbers = ({text, value}) => {
  return (
  <tr>
    <td> {text}</td>
    <td> {value} </td>
  </tr>
  )
}
 
const Statistics = (props) => {
  if (props.all === 0){
    return (
      <div>
        <h2>Statistics</h2>
        <p> No Feedback given</p>
      </div>
    )
  }
  else if (props.all > 0){
    return(
      <>
      <h2>Statistics</h2>
      <table>
        <thead>
        </thead>
       <tbody>
        <Numbers text='Good' value={props.value[0]}/>
        <Numbers text='Neutral' value={props.value[1]} />
        <Numbers text='Bad' value={props.value[2]} />
        <Numbers text='All' value={props.value[3]} />
        <Numbers text='Average' value={props.value[4]} />
        <Numbers text='Positive' value={`${props.value[5] * 100}%`} />
       </tbody>
      </table>
      </>
    )
  }
}


const App = () => {
  const [score, setScore] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
    all: 0,
    avg: 0,
    positive: 0
  })
  
 

  const setGood = () => {
    setScore({
      ...score,
      good: score.good + 1,
      all: score.all + 1,
      avg: (((score.good + 1) - score.bad) / (score.all + 1)),
      positive: ((score.good  + 1)/ (score.all + 1)) 
      
    })
  }

  const setBad = () => {
    setScore({
      ...score,
      bad: score.bad + 1,
      all: score.all + 1,
      avg: ((score.good - (score.bad + 1)) / (score.all + 1)),
      positive: (score.good / (score.all + 1))
    })
    
  }

  const setNeutral = () => {
    setScore({
      ...score,
      neutral: score.neutral + 1,
      all: score.all + 1,
      avg: ((score.good - score.bad) / (score.all + 1)),
      positive: (score.good / (score.all + 1))
      
    })
  }

 
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button score={setGood} text={'Good'}/>
      <Button score={setNeutral} text={'Neutral'}/>
      <Button score={setBad} text={'Bad'}/>
      <Statistics all={score.all} value={[score.good, score.neutral, score.bad, score.all, score.avg, score.positive]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))