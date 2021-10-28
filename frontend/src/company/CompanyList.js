import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies(){
      const res = await JoblyApi.request("companies");
      setCompanies(res.companies);
    }
    fetchCompanies();
  }, []);

  const getCompanies = (results) => {
    setCompanies([...results.companies]);
  };

  if (companies.length === 0) {
    return (
      <div>
        <SearchForm type="companies" header="name" get={getCompanies} />
        <p>Sorry, no results were found!</p>
      </div>
    )
  };

  return (
    <div>
      <SearchForm type="companies" header="name" get={getCompanies} />
      {companies.map(company => 
        <CompanyCard
          key={company.handle}
          handle={company.handle}
          name={company.name}
          description={company.description}
        />
      )}
    </div>
  )
}

export default CompanyList;