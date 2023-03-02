import Table from "react-bootstrap/esm/Table";
import ROW from "./ROW";

function Review({ data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Contributions</th>
          {/* <th>Status</th> */}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((e) => (
          <ROW key={e.id} id={e.id} Contribution={e.name} />
        ))}
      </tbody>
    </Table>
  );
}

export default Review;
