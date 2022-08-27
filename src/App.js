import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const handleSubmit = () => {
    if (name.length === 0) {
      alert("Please enter name");
    }
    if (schoolName.length === 0) {
      alert("Please enter school name");
    }

    if (name.length > 0 && schoolName.length > 0) {
      console.log({ name, schoolName });
      setName("");
      setSchoolName("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">School Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="School Name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
