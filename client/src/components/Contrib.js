import axios from "axios";

function Contribution() {
  const SubmitHandle = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    //
  };
  return (
    <form className="form-inline" onSubmit={(e) => SubmitHandle(e)}>
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="hash" className="sr-only">
          Enter a hash value:
        </label>
        <input
          type="text"
          className="form-control"
          id="hash"
          name="hash"
          placeholder="Enter a hash value"
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
}

export default Contribution;
