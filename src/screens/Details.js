// import Detailsstyles from './Details.module.css';
import { getDetails } from "../getDetails"


const Details = () => {

    let details = getDetails();
    console.log(details);

    return (
            <>
            <h1>Details</h1>
        </>
    )
        
    

}
    
export default Details
