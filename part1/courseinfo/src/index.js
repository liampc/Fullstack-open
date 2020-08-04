import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <>
      <h1> {props.name} </h1>
    </>
    
  )
}

// Todo: make Parts component

const Part = (props) => {
  return (
    <>
      <p>{props.part} : {props.number} exercises</p>
    </>
  )
}

const Content = (props) => {
  
  return (
    <div>
      <Part part={props.part[0]} number={props.number[0]}/>
      <Part part={props.part[1]} number={props.number[1]}/>
      <Part part={props.part[2]} number={props.number[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p> Total number of exercises: {props.total} </p>
    </>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header name={course} />
      <Content part={[part1,part2, part3]} number={[exercises1,exercises2,exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))