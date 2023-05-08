    import React, { useRef, useState } from 'react';
    import styles from '../styles/styles.module.css';
    import cn from "classnames";
    import call from '../assets/call.svg';
    import lock from '../assets/lock.svg';


    const Input = ( {
        size = "",
        rows = "1",
        error, 
        disabledInput, 
        placeholder,
        iconPosition,
        helperText = "", 
        fullwidth,
        multiline,
        className, 
        } ) => {
        
        const [isFocused, setIsFocused] = useState(false);

        const classes = cn(
            styles.div,
            { [styles.redBorder]: error && isFocused  },
            { [styles.redBorder]: error   },
            { [styles.blueBorder]: isFocused},
            { [styles.disabled]: disabledInput },
            { [styles.disabledText]: disabledInput && helperText },
            { [styles.md]: size === "md" },
            { [styles.lg]: size === "lg" },
            { [styles.rows_4]: multiline && rows === '4' },
            { [styles.fullwidth]: fullwidth },
            // { [styles.md]: md},
            className
        
        );

        const classesLabel = cn(
            styles.div,
            { [styles.labelRed]: error &&  isFocused},
            { [styles.labelRed]: error },
            { [styles.labelBlue]: isFocused }
        );



        const disableRef = useRef("");

        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => setIsFocused(false);

        function defaulLoaded() {
            disableRef.current.disabled = true;
        }
        const [errorMessage, setErrorMessage] = useState({
            isValid: true,
            message: ''
        })
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
                        message: 'text must be atleast 6'
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
                {iconPosition === 'start' && (  <img className={styles.icons } alt = "password"  src={call}/>)}
            
                <input
                    type="text" 
                    className={`${styles.input}`}
                    placeholder={placeholder }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    name = "text"
                    onLoad={()=> defaulLoaded}
                    onChange={handleChange}
                    defaultValue={""}
                    disabled = {disabledInput}
                    ref={ disableRef}
                    size = {size}
                    rows= {rows}
                    multiline
                    helperText={helperText}                    
                    
                />
                
                {iconPosition === 'end' && (<img className={styles.icons } alt = "password"  src={lock}/>)}

            </div>
        

            {!errorMessage.isValid && <span style={{color: "red"}}>{errorMessage.message}</span>}
            {helperText ? (error ? <span style={{color: "red"}}>{helperText}</span> : <span>{helperText}</span>) : null }

           
        
        </div>
    )
    }
    export default Input