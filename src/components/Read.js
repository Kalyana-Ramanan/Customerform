import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Read = () => {
  const [getApi, setApi] = useState([])
  
  const navigate = useNavigate()

    const updateUser=({getFirstname, getLastname, getCheck,id})=>
    {
          localStorage.setItem('id',id)
          localStorage.setItem('firstName', getFirstname)
          localStorage.setItem('lastName', getLastname)
          localStorage.setItem('checked', getCheck)
          
          navigate('/update')
    }
    const Submit=()=>
    {
        navigate('/')
    }

  const deleteuser=async(id)=>
  {
      await axios.delete('http://localhost:3000/student/' + id)
      callgetapi()
  }

  const callgetapi = async () => {
    const resp = await axios.get('http://localhost:3000/student')
    setApi(resp.data)
  }

  useEffect(() => {
    callgetapi()
  }, [])

  return (
    <div>
      <button onClick={Submit}>Goto login Page</button>
      <br></br>
     <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">ValidCheck</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
      

    </tr>
  </thead>
  <tbody>
  {
    getApi.map(data => (
     <tr key={data.id}>
       <th scope="row">{data.id}</th>
      <td>{data.getFirstname}</td>
      <td>{data.getLastname}</td>
      <td>{data.getCheck ? 'checked' : 'Not checked'}</td>
      <td><button onClick={()=>deleteuser(data.id)}>Delete</button></td>
      <td><button onClick={()=>updateUser(data)}>Update</button></td>
      </tr>
    ))
}
  </tbody>
</table>
    </div >
  )
}

export default Read