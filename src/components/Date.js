import React from 'react'
import Datestyles from './Date.module.css'


const Date = () => {

    let today = new window.Date();
    let date =  today.getDate()+ '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
    return (
        <div className={Datestyles.date}>
            {`${date}`}
        </div>
    )
}

export default Date
