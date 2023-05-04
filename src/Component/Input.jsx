import React, { useRef, useState } from 'react';
import styles from '../styles/styles.module.css';
import cn from "classnames";
// import { IconAsset } from './iconAsset';
import provider from '../assets/provider.png';


const Input = ({
    normal, 
    error, 
    disabledInput, 
    placeholder,
    iconPosition, 
    className, 
    icon }) => {
    
    const [isFocused, setIsFocused] = useState(false);
   

    const classes = cn(
        styles.div,
        { [styles.redBorder]: error   },
        { [styles.redBorder]: error && isFocused  },
        { [styles.blueBorder]:isFocused && normal},
        { [styles.disabled]: disabledInput },
        className
       
      );

      const classesLabel = cn(
        styles.div,
        { [styles.labelRed]: error &&  isFocused},
        { [styles.labelBlue]: isFocused }
      );


    const [errorMessage, setErrorMessage] = useState({
        isValid: true,
        message: ''
    })

    const disableRef = useRef("");

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    function defaulLoaded() {
        disableRef.current.disabled = true;
      }


    const validateInput = (value) => {
        if (value.trim() === '')
        {
            setErrorMessage({
                isValid:true, 
                message: 'This field is required'
            });
        }else if (value.length < 6) {
            setErrorMessage({
                isValid:false, 
                message: 'Password must be atleast 6'
            });

        } else{
            setErrorMessage({
                isValid:true, 
                message: ''
            })

        }
    }
    const handleChange = (e) =>{
        validateInput(e.target.value);
    }

  return (
    <div className={styles.input_box}>
        <label  className={`${classesLabel}`}>label</label>
       
        <div className={`${classes} ${styles.wrapper}`} >
            {iconPosition === 'start' && ( <img className={styles.icons}  src={provider}/>)}

            <input
                type="password" 
                className={`${styles.input}`}
                placeholder={placeholder }
                onFocus={handleFocus}
                onBlur={handleBlur}
                name = "password"
                onLoad={()=> defaulLoaded}
                onChange={handleChange}
                defaultValue={true}
                disabled = {disabledInput}
                ref={ disableRef}
            />
            
            {iconPosition === 'end' && (<img className={styles.icons}  src={provider}/>)}

        </div>
       

         {!errorMessage.isValid && <span style={{color: "red"}}>{errorMessage.message}</span>}
      
    </div>
  )
}
export default Input