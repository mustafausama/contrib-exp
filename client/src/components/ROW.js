import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ROW({ id, Contribution, review }) {
  const YESHandle = (e) => {
    review(id, true);
  };
  const NOHandle = (e) => {
    review(id, false);
  };
  return (
    <tr>
      <td>{Contribution}</td>
      <td>
        <InputGroup className="mb-3">
          <Form.Control type="text" placeholder="XP Stake (beta)" />
          <Button
            className="btn-success"
            onClick={(e) => YESHandle(e)}
            id="button-addon2"
          >
            YES
          </Button>
          <Button
            className="btn-danger"
            onClick={(e) => NOHandle(e)}
            id="button-addon3"
          >
            NO
          </Button>
        </InputGroup>
      </td>
    </tr>
  );
}
export default ROW;
