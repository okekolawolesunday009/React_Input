import React, { useState } from 'react';
import Input from './Input'
import styles from '../styles/styles.module.css';




export default function InputList() {
  const handleChange = (e) =>{

  }

  
  return (
    <div className ={styles.container}>
       <div className={styles.inputitem}>
       <p style={{fontWeight: "bolder"}}>input -  default</p>
         <Input placeholder="default"/>
       </div>

       <div className=''>
        <p style={{fontWeight: "bolder"}}>input -  error</p>
            <Input error isFocused placeholder="error" handleChange={handleChange}/>
        </div>

       

       <div className={styles.inputitem}>
       <p style={{fontWeight: "bolder"}}>input -  disabled</p>
            <Input disabledInput placeholder="disabled"/>
        </div>

        <div style={{display: "flex", gap: "20px"}}>
         <div className={styles.inputitem}>
                  <p style={{fontWeight: "bolder"}}>input -   text</p>
                  <Input  helperText = "something interesting"  />
                
          </div>
          <div className={styles.inputitem}>
                  <p style={{fontWeight: "bolder"}}>input -  error && text</p>
                  <Input  error helperText = "something interesting"  />
                
          </div>
       
       
       </div>

        <div style={{display: "flex", gap: "20px"}}>
            <div className={styles.inputitem}>
            <p style={{fontWeight: "bolder"}}>input -  startIcon</p>
                <Input  iconPosition="start" placeholder="placeholder"/>
            
            </div>
            <div className={styles.inputitem}>
            <p style={{fontWeight: "bolder"}}>input -  endIcon</p>
                <Input  iconPosition="end" placeholder="placeholder"/>
                
            </div>
        </div>

          

            <div style={{display: "flex", gap: "20px"}}>
              <div className={styles.inputitem}>
                    <p style={{fontWeight: "bolder"}}>input -  md</p>
                    <Input  size = "md"  placeholder="placeholder"/>
                    
                </div>
                <div className={styles.inputitem}>
                  <p style={{fontWeight: "bolder"}}>input -  lg</p>
                  <Input  size = "lg"  placeholder="placeholder"/>
                
                 </div>
           </div>


           <div className={styles.inputitem}>
                  <p style={{fontWeight: "bolder"}}>input -  fullwidth</p>
                  <Input  fullwidth  placeholder="placeholder"/>
                
            </div>
            
           <div className={styles.inputitem}>
                  <p style={{fontWeight: "bolder"}}>input -  multiple lines</p>
                  <Input multiline rows= "4"  placeholder="placeholder"/>
                
            </div>

        {/* <AiFillEyeInvisible/> */}
      
    </div>
  )
}
