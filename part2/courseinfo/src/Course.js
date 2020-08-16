import React from 'react';
import {Header, Content, Total} from './components'

const Course = ({course}) => {
    return (
      <>
      <h1>Web Development Curriculum</h1>
      <div>
        {course.map(course => 
          <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
          </div>
        )}
      </div>
      </>
    )
  }
  

  export default Course