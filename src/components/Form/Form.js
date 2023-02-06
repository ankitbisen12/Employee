import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import classes from "./Form.module.css";

const Form = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const empNameRef = useRef("");
  const emailRef = useRef("");
  const countryRef = useRef("");
  const stateRef = useRef("");
  const contactRef = useRef("");
  const dateRef= useRef("");

  const resetInput = () => {
    empNameRef.current.value =
    emailRef.current.value =
    countryRef.current.value =
    stateRef.current.value=
    contactRef.current.value=
    dateRef.current.value=
      "";
  }

  const imageChangeHandler =(e)=>{
      setSelectedFile(e.target.files[0]);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    const user = {
      id: Math.random().toString(),
      imageUrl: selectedFile.type,
      empName: empNameRef.current.value,
      email: emailRef.current.value,
      country: countryRef.current.value,
      state:stateRef.current.value,
      contact: contactRef.current.value,
      date:dateRef.current.value,
    };
    props.onAddUser(user);  

    setSelectedFile("");

    resetInput();

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  let buttonContent = <span>Add Employee</span>;
  if (isLoading) {
    buttonContent = <span>Adding....</span>;
  }

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={addUserHandler}>
        <h1>Employee</h1>
        <input type="text" placeholder="Full Name" ref={empNameRef} required/>
        <input type="email" placeholder="Email" ref={emailRef}/>
        <input type="text" placeholder="Country" ref={countryRef} required/>
        <input type="tel" placeholder="Mobile no" ref={contactRef} required/>
        <input type="text" placeholder="State" ref={stateRef} required/>
        <input type="date"  ref={dateRef} required/>
        <input type="file" onChange={imageChangeHandler} required/>
        <div className={classes.label}>
        <label>
           <input type="checkbox" label="Comunication" />
           Communication
        </label>
        <label>
           <input type="checkbox" label="Comunication" />
           Decision Making
        </label>
        <br/>
        <label>
           <input type="checkbox" label="Comunication" />
           Ability to work under Pressure
        </label>
        <br/>
        <label>
           <input type="checkbox" label="Comunication" />
           Time Management
        </label>
        <label>
           <input type="checkbox" label="Comunication" />
           Self Motivation
        </label>
        <br/>
        <label>
           <input type="checkbox" label="Comunication" />
           Conflict Resolution
        </label>
        <label>
           <input type="checkbox" label="Comunication" />
           Leadership & Adaptability
        </label>
        </div>
        <Button type="submit">{buttonContent}</Button>
      </form>
    </React.Fragment>
  );
};

export default Form;