import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({score, text}) => {
  return (
     <button onClick={score}> {text} </button>
  )
}
  
const Numbers = ({text, num, onChange}) => {
  return (
  <>
    <p onChange={onChange}> {text} : {num}</p>
  </>
  )
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
      avg: (score.good - score.bad) / score.all,
      positive: score.good / score.all
      
    })
    console.log(score.good, score.bad, score.all)
  }

  const setBad = () => {
    setScore({
      ...score,
      bad: score.bad + 1,
      all: score.all + 1,
      avg: (score.good - score.bad) / score.all,
      positive: score.good / score.all
    })
    console.log(score.good, score.bad, score.all)
  }

  const setNeutral = () => {
    setScore({
      ...score,
      neutral: score.neutral + 1,
      all: score.all + 1,
      avg: (score.good - score.bad) / score.all,
      positive: score.good / score.all
      
    })
  }

 
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button score={setGood} text={'Good'}/>
      <Button score={setBad} text={'Bad'}/>
      <Button score={setNeutral} text={'Neutral'}/>
      <h2> Statistics</h2>
      <Numbers text={'Good'} num={score.good} />
      <Numbers text={'Bad'} num={score.bad} />
      <Numbers text={'Neutal'} num={score.neutral} />
      <Numbers text={'All'} num={score.all}/>
      <Numbers text={'Average'} num={score.avg}/>
      <Numbers text={'Positive'} num={score.positive} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))