import { getAllByDisplayValue } from '@testing-library/dom'
import React, { useEffect, useState } from 'react'

export default function CounterHooks() {
  const [count, setCount] = useState(0) //useState untuk deklarasi state di dalam function component
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState("Helloo")

  useEffect(() => {
    document.title = `you clicked ${count} times`
    // functionAPI()
  }, [])

  // useEffect(() => {
    
  //   return () => {
  //     console.log('component will unmount');
  //   }
  // }, ['component did update'])

  // useEffect(() => {
  //   console.log('component did mount')
  // })

  // useEffect(() => {
  //   return() => {
  //     console.log('component will unmount')
  //   }
  // })

  // //component will update
  // useEffect(() => {
  // }, []) 


  const increment = (value) => {
    setCount(count + value)
  }

  const decrement = (value) => {
    setCount(count - value)
  }

  const reset = (value) => {
    setCount(value)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment(4000)}>+</button>
      <button onClick={() => reset(0)}>zero</button>
      <button onClick={() => decrement(1)}>-</button>
    </div>
  )
}
