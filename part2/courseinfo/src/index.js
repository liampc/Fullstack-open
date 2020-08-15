import React from 'react';
import ReactDOM from 'react-dom';


const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course[0].parts.reduce((total, part) => total + part.exercises, 0)
  //todo change course, add another layer
  return(
    <p style={{fontWeight:'bold'}}>Total of {sum} exercises </p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <h1> Web Development Curriculum</h1>
      <h2>{course[0].name}</h2>
      {course[0].parts.map(part => 
        <Part key={part.id} part={part}/>
      )}
      <h2>{course[1].name}</h2>
      {course[1].parts.map(part => 
        <Part key={part.id} part={part}/>
      )}
    </div> 
   
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}


const App = () => {
  const course = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id:2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return (
    <Course course={course} />
  ) 
}

ReactDOM.render(<App />, document.getElementById('root'));


