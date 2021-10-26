import React from "react";

const CompanyCard = ({handle, name, description, logoUrl}) => {
  return(
    <a href={`/companies/${handle}`}>
      <h5>{name}</h5>
      <p>{description}</p>
      <img src={logoUrl} alt={logoUrl} />
    </a>
  )
}

export default CompanyCard;