import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//  

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

const Header = (props) => {
  return (
    <>
      <h1> {props.name} </h1>
    </>
    
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.part} : {props.number} exercises</p>
    </>
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
      <Content part={part1} number={exercises1} />
      <Content part={part2} number={exercises2} />
      <Content part={part3} number={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))