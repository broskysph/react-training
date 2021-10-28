import { useState, useEffect } from 'react'
import { Child } from './child'

const Notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

const FetchData = () => {
  const [users, setUsers] = useState([])

  const getData = async () => {
    try{
      const rawData = await fetch('http://jsonplaceholder.typicode.com/users')
      const data = await rawData.json()
      if(data){
        setUsers(data)
      }
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(users)

  return(
    <div>
      <Child notes={Notes}/>
      <ol>
        {users.map((user, id) => <li key={id}>{user.username}</li>)}
      </ol>
    </div>
  )
}

export default FetchData