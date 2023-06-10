import React from "react";
import { Join } from "./assets/util/JoinClasses";
import styles from './assets/sass/modules/app.module.scss'

export default function Start(){

    React.useEffect(()=>{
        document.title = 'Start React'
    })

    return (
        <div>
            <h1 className={Join([styles['dark-blue'],styles.weight,styles.pad])}>
                Hello <span className={Join([styles.weight,styles.black])}>React 17</span>
                <img src="./src/images/react.png" alt="react-logo" />
            </h1>
            {/* You can now start coding right here..*/}
        </div>
    )
}
// this will serve as the APP.JS 