import React from "react";
import Form from "../Form/Form";
import Card from "./Card";
import classes from "./Employee.module.css";
import EmployeeCard from "./EmployeeCard";

const Employee = (props) => {
  const addUserHandler = (user)=>{
    props.onAddUser(user);
  }

  // Logic for displaying each roleModelCard.
  const employeeList = props.users.map((char) => (
    <EmployeeCard
    imgsrc={char.src}
    type={char.type}
    name={char.name}
    about={char.about}
    key={char.id}
    country={char.country}
    state={char.state}
    contact={char.contact}
    date={char.date}
    /> 
  ));

  return (
    <React.Fragment>
      <Card className={classes.login}>
        <Form onAddUser={addUserHandler} fetchUserHandler={props.fetchUser}/>
      </Card>
      <div className={classes.employee_card}>{employeeList}</div>
    </React.Fragment>
  );
};

export default Employee;
