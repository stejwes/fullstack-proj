import React from 'react'
import ReactDOM from 'react-dom'

const Footer = () => {
  return (
    <div>
      react website created by <a href="https://github.com/stejwes">stejwes</a> <br />
      with help from <a href="https://fullstackopen.com/">fullstackopen</a>
    </div>
  )
}

const Header = (course) => {
  return (
    <div>
      Course: {course.cname}
    </div>

  )
}

const Content = (part) => {
  return (
    <div>
    {part.pname} {part.exname}
    </div>

  )
}

const Total = (prop) => {
  return (
    <div>
    <p>Total number of exercises: {prop.exname}</p>
    </div>

  )
}
const App = () => {
  console.log('Hello from component')
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>

    <Header cname={course} /> <br />
    <p>Content:</p>
    <Content pname={part1} exname={exercises1} />
    <Content pname={part2} exname={exercises2} />
    <Content pname={part3} exname={exercises3} />
    <Total exname={exercises1+exercises2+exercises3} />


    </div>
  )
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)


export default App;
