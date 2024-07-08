import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css"

const Header: React.FC =() =>{
    return(
        <div className="fixed top-0 left-0 w-full md:w-1/2 lg:w-full  bg-whiteSmoke z-50 ">
       <Navbar/>   
        </div>
    )
}

export default Header;