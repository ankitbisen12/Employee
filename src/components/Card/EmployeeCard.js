import React from "react";
import classes from "./EmployeeCard.module.css";

const  EmployeeCard = (props) => {
  return (
    <div className={classes.employee}>
      <h3>{props.src}</h3>
      <h3>{props.name}</h3>
      <div className={classes.typ}>{props.about}</div>
      <div className={classes.typ}>{props.contact}</div>
      <div className={classes.typ}>{props.state}</div>
      <div className={classes.typ}>{props.country}</div>
      <div className={classes.typ}>{props.date}</div>
      
    </div>
  );
};

export default EmployeeCard;
