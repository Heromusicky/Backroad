import pageLink from "../../Pagelink"
import back from "../images/logo.svg"


const Navbar = () => {
  return (
    <div><nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={back} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <ul className="nav-links" id="nav-links">
        {pageLink.map((items)=>{
const {href,text,id} =items

return(


  <li key={id}>
          <a href={href} className="nav-link">
           {text}
          </a>
        </li>
)

        })}
        
       
      </ul>

      <ul className="nav-icons">
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="nav-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="nav-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="nav-icon"
          >
            <i className="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav></div>
  )
}

export default Navbar