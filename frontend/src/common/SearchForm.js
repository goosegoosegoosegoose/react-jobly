import React, {useState } from "react";
import JoblyApi from "../api";
import { Button, Row } from "react-bootstrap"

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
      <Row>
        <div className="input-group col-2">
          <input
            className="form-control"
            value={formData}
            placeholder="Enter search term.."
            onChange={handleChange}
          />
          <Button variant="primary" size="sm">Submit</Button>
        </div>
      </Row>
    </form>
  )
}

export default SearchForm;