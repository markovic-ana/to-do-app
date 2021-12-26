import { useParams } from "react-router-dom";
import { getDetail} from "../getDetails";


export default function Detail() {
  let params = useParams();
  let detail = getDetail(params.id);
  return (
      <h2>{detail.text}</h2>
  );
}