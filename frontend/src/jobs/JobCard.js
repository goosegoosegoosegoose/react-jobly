import React, { useContext } from "react";
import UserContext from "../auth/userContext";

const JobCard = ({title, salary, equity, apply, id}) => {
  const currentUser = useContext(UserContext);
  let exists
  if (currentUser.applications) {
    exists = currentUser.applications.includes(id);
  }
   
  return (
    <div>
      <h6>{title}</h6>
      <small>Salary: {salary}</small><br />
      <small>Equity: {equity}</small><br />
      {exists ? <button disabled>Applied</button> : <button id={id} onClick={apply}>Apply</button>}
    </div>
  )
}

export default JobCard;