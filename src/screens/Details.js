// import Detailsstyles from './Details.module.css';
import { Link } from "react-router-dom";
import { getDetails } from "../getDetails"


const Details = () => {

    let details = getDetails();
    console.log(details);


    return (
        <>
            {details.map(detail => (
                <Link
                to = {`/details/${detail.id}`}
            key={detail.id}
            >
            {detail.text}
        </Link>
    ))
}
        </>
    )
}

    
export default Details
