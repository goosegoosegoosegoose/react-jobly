import React, { useContext } from "react";
import UserContext from "../auth/userContext";
import { Button, Card } from "react-bootstrap"

const JobCard = ({title, salary, equity, apply, id}) => {
  const currentUser = useContext(UserContext);
  let exists
  if (currentUser.applications) {
    exists = currentUser.applications.includes(id);
  }
   
  return (
    <Card className="my-3" style={{width: '70vw'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Salary: {salary}</Card.Text>
        <Card.Text>Equity: {equity}</Card.Text>
        {exists ? <Button variant="danger" size="sm" disabled>Applied</Button> : <Button id={id} variant="primary" size="sm" onClick={apply}>Apply</Button>}
      </Card.Body>
    </Card>
  )
}

export default JobCard;