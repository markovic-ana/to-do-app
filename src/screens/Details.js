import Detailsstyles from './Details.module.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


const Details = () => {


    const data = JSON.parse(localStorage.getItem('todos'));
    console.log(data);

    




        return (
        <div className="container">
            <Link to="/">
                <Header />
            </Link>
            <h1 className={Detailsstyles.details}>hi</h1>
        </div>
    )
        
    

}
    
export default Details
