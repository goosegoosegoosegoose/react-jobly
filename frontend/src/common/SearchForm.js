import React, {useState } from "react";
import JoblyApi from "../api";

const SearchForm = ({ type, header, get }) => {
  const [formData, setFormData] = useState("")

  const search = async (handle) => {
    const res = await JoblyApi.search(type, header, handle);
    get(res);
  }

  const handleChange = evt => {
    const { value } = evt.target;
    setFormData(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    search(formData);
    setFormData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={formData}
        placeholder="Enter search term.."
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default SearchForm;