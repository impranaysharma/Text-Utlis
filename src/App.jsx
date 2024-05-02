import './App.css'
import Navbar from './navbar.jsx'
import Form from './form.jsx'
import About from './about.jsx'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
export default function App() {
  return (
    <main>
      <Navbar heading="Text Utlis"/>
      <alert/>
        <div>      
            <div id='form'> <Form/></div>        
          </div>
        
    </main>
  )
}
