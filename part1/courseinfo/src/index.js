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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header name={course} />
      <Content part={[part1.name,part2.name, part3.name]} number={[part1.exercises,part2.exercises,part3.exercises]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))