import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

const FetchDataHooks = () => {
  const [users, setUsers] = useState([])

  const getUser = async () => {
    try {
      const raw = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await raw.json() //untuk convert dari link api ke json
      setUsers(data) //untuk update/memasukan data json dari api ke variabel users
    } catch (error) {
      console.log('Data belum terakses')
    }
  }

  useEffect(() => {
   getUser()
  }, [])

  console.log(users);

  return(
    <Fragment>
      <div>Loading...</div>
      <ol>
        {users.map(user => <li>{user.username}</li>)}
        {users.map((user, id) => (
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

              <div className="card-body">
                <p className="card-text">{user.name}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">{user.phone}</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">{user.username}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ol>
    </Fragment>
    
  )
}

export default FetchDataHooks