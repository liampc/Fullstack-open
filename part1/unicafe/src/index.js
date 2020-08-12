import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({score, text}) => {
  return (
     <button onClick={score}> {text} </button>
  )
}
  
const Numbers = ({text, num}) => {
  return (
  <>
    <p> {text} : {num}</p>
  </>
  )
}
 



const App = () => {
  const [score, setScore] = useState({
    good: 0,
    bad: 0,
    neutral: 0
  })

  const setGood = () => {
    setScore({
      ...score,
      good: score.good + 1
    })
  }

  const setBad = () => {
    setScore({
      ...score,
      bad: score.bad + 1
    })
  }

  const setNeutral = () => {
    setScore({
      ...score,
      neutral: score.neutral + 1
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
      <Numbers text={'Neutra'} num={score.neutral} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))