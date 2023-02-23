import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Create=()=> {
 const [getFirstname,setFirstname]=useState()
 const [getLastname,setLastname]=useState()
 const [getCheck,setCheck]=useState(false)

 const navigate = useNavigate()

   const Postdata=async()=>
   {
    await axios.post('http://localhost:3000/student',{
           getFirstname,
           getLastname,
           getCheck,
      })
      navigate('/read')
      let num = Number(getFirstname)
      console.log(num);
      if(num===0)
      {
        alert('please sumbit all value  ')
      }
      else
      {
        alert('submited successfully')
      }

   }
  return (
    <div class="p-3 mb-2 bg-body text-dark">
        <br></br>
       <label>FirstName</label>
       <input type ='text' value={getFirstname} onChange={event=>setFirstname(event.target.value)} placeholder='Enter FirstName'/>
       <br></br>
       <br></br>
       <label>Lastname</label>
       <input type ='text'value={getLastname} onChange={event=>setLastname(event.target.value)}  placeholder='Enter Lastname' />
       <br></br>
       <label>Checked</label>
       <input type ='checkbox' onChange={()=>setCheck(!getCheck)} value ={getCheck}/>
       <br></br>
       <button onClick={Postdata}>Submit</button>


    </div>
  )
}

export default Create