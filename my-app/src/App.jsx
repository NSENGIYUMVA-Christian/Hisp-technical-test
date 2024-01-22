import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Body} from './Components'



function App() {
  return (
   <div>
    <Body/>
    <ToastContainer />
   </div>
  )
}

export default App
