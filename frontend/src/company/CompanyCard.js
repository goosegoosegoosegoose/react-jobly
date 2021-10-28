import React from "react";

const CompanyCard = ({handle, name, description}) => {
  return(
    <a href={`/companies/${handle}`}>
      <h5>{name}</h5>
      <p>{description}</p>
    </a>
  )
}

export default CompanyCard;