import axios from 'axios'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


const Update=()=>{
  const [getFirstname,setFirstname]=useState()
  const [getLastname,setLastname]=useState()
  const [getCheck,setCheck]=useState(!false)
  const [id,setId]=useState()

  const navigate = useNavigate()

  const updateuser =async()=>
  {
     await axios.put('http://localhost:3000/student/' + id,{
       getFirstname,
       getLastname,
       getCheck,
     });
     navigate('/read')

  }

  useEffect(()=>
  {
    setId(localStorage.getItem('id'))
    setFirstname(localStorage.getItem('firstName'))
    setLastname(localStorage.getItem('lastName'))
    setCheck(localStorage.getItem('checked'))

  }, [])
  return (
    <div>
       <br></br>
       <label>FirstName</label>
       <input type ='text' value={getFirstname} onChange={event=>setFirstname(event.target.value)} placeholder='Enter FirstName'/>
       <br></br>
       <br></br>
       <label>Lastname</label>
       <input type ='text'value={getLastname} onChange={event=>setLastname(event.target.value)}  placeholder='Enter Lastname' />
       <br></br>
       <label>Checked</label>
       <input type ='checkbox' onChange={()=>setCheck(getCheck)} value ={getCheck}/>
       <br></br>
       <button onClick={updateuser}>update</button>

    </div>
  )
}

export default Update