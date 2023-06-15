import React from "react";
import { Join } from "./assets/util/JoinClasses";
import styles from './assets/sass/modules/app.module.scss'

export default function Start(){

    React.useEffect(()=>{
        document.title = 'Start React'
    })

    return (
        <div className={Join([styles['d-flex-center']],styles.gap20)}>
            <h1 className={Join([styles['dark-blue'],styles.weight,styles.pad])}>
                Hello <span className={Join([styles.weight,styles.black])}>React 17</span>
            </h1> 
                <img className={Join([styles['img-size-50px'],styles.react])} src="/src/images/react.png" alt="react-logo"/>
            {/* You can now start coding right here..*/}
        </div>
    )
}
// this will serve as the APP.JS 