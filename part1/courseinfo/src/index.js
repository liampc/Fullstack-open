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

  const course = { 
    name: 'Half Stack application development',
    parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
  ]
}
  return (
    <div>
      <Header name={course.name} />
      <Content part={course.parts.map(n => n.name)} number={course.parts.map(n => n.exercises)} />
      <Total total={course.parts.map(n => n.exercises)} />
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))