import React from 'react'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Delete from './components/Delete'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  return (
    <div className='app'>crud Operation
     <BrowserRouter>
     <Routes>
      <Route exact path = '/' element ={<Create />}/>
      <Route exact path = '/read' element = {<Read/>} />
      <Route exact path = '/update' element = {<Update/>} /> 
      <Route exact path = '/delete' element = {<Delete />} >
      </Route>    
     </Routes>
     </BrowserRouter>
     <div>
     </div>

    </div>
  )
}
   
export default App