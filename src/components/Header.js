import Date from "./Date"
import Headerstyles from "./Header.module.css"

const Header = () => {
    return (
        <form className={Headerstyles.header}>
            <h1 style={{ color: '#F92C85' }}>Note-Taker</h1>
        <Date/>     
       </form>
    )
}

export default Header
