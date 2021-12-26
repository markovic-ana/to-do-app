// import Detailsstyles from './Details.module.css';
import { Link, Outlet } from "react-router-dom";
import { getDetails } from "../getDetails"


export default function Details() {

    let details = getDetails();
    console.log(details);


    return (
        <>
            {/* {details.map(detail => (
                <Link
                to = {`/details/${detail.id}`}
            key={detail.id}
            >
            {detail.text}
        </Link>
    ))
            } */}
            <Outlet />
        </>
    )
};

