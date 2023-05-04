import React from 'react'
import Input from './Input'
import styles from '../styles/styles.module.css';




export default function InputList() {
  return (
    <div className ={styles.container}>
       <div className={styles.inputitem}>
         input -  default//normal
         <Input normal placeholder="default"/>
       </div>

       <div className={styles.inputitem}>
        <div className=''>
            input -  error
            <Input error/>
        </div>
       
       </div>

       <div className={styles.inputitem}>
            input -  disabled
            <Input disabledInput placeholder="disabled"/>
        </div>

        <div style={{display: "flex", gap: "20px"}}>
            <div className={styles.inputitem}>
                input -  startIcon
                <Input normal iconPosition="start" placeholder="disabled"/>
              
            </div>
            <div className={styles.inputitem}>
                input -  endIcon
                <Input normal iconPosition="end" placeholder="disabled"/>
                
            </div>
        </div>

        {/* <AiFillEyeInvisible/> */}
      
    </div>
  )
}
