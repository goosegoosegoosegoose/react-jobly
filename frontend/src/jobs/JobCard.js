import React, { useContext, useEffect, useState } from "react";
import UserContext from "../auth/userContext";

const JobCard = ({title, salary, equity, apply, id}) => {
  const currentUser = useContext(UserContext);
  const [user, setUser] = useState(currentUser);
  const exists = user.applications.includes(id);
  // currentUser sometimes is defined, sometimes is not

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser])
  
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