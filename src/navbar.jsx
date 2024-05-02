import React,{useState} from 'react'

export default function Navbar(props) {
 
  const[myStyle, setMyStyle] = useState({
      color: 'black',
      backgroundColor: 'grey'
  })
  const[btnText, setBtnText] = useState("Enable Dark mode")
  const toogleStyle = () => {
      if (myStyle.color === "grey") {
          setMyStyle({
              color: "black",
              backgroundColor: "grey",
            
          })
          setBtnText("Enable Light Mode")
        document.body.style.backgroundColor = 'white';
                  
      }
      else {
          setMyStyle({
              color: "grey",
              backgroundColor: "black"
          })
          setBtnText("Enable Dark Mode")
        document.body.style.backgroundColor = 'grey';
      }
  }
  const onlyc = {
    color : myStyle.color
  }
  return(<>
    <nav className="navbar navbar-expand-lg " style={myStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={onlyc}>{props.heading}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={onlyc} >Home</a>
            </li>
            
            
          </ul>
          <form className="d-flex" role="search">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={toogleStyle} />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{btnText}</label>
              
            </div>
          </form>
          
        </div>
      </div>
    </nav>
    
    </>
  )
}