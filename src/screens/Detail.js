import { useParams } from "react-router-dom";
import { getDetail } from "../getDetails";
import Detailstyles from './Detail.module.css';
import { useState } from "react";


const Detail = ({onAdd}) => {
         const [text, setText] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (text.length < 1) {
            alert("You didn't type anything. Please add a to do item");
        } else {

            onAdd({ text });
            setText('');
        }
    }
    
  let params = useParams();
    let detail = getDetail(params.id);
    
    return (
        <div className={Detailstyles.container}>
      <div className={Detailstyles.header}>
        <h3>{detail.text}</h3>
            </div>
            <form className={Detailstyles.form}  onSubmit={onSubmit}>
                <input type="text" styles={{width: "80%"}}value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add something to do..." />
            <input type="submit" style={{ backgroundColor: '#F92C85', border: 'none', color: 'white', width: "20%" }}  value="Save"/>
        </form>
            </div>
  );
}

export default Detail;