import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";


const CompanyCard = ({handle, name, description}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/companies/${handle}`)
  }


  return(
    <Card className="my-4" style={{width: '70vw', cursor: "pointer"}} onClick={handleClick}>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card>
  )
}

export default CompanyCard;