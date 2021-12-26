import { useParams } from "react-router-dom";

export default function Detail() {
     let params = useParams();
    return <h2>{params.id}</h2>;
}