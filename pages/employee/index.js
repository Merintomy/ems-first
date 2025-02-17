import { useRouter } from "next/router";
import { FaEye } from "react-icons/fa";

function Index() {
  const router = useRouter();

  const viewEmployee = (id) => {
    router.push(`/employee/${id}`);
  };

  return (
    <div className="table-responsive mt-4">
      <table className="table table-striped text-center">
        <thead className="table-light">
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee</th>
            <th scope="col">Designation</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ajith</td>
            <td>Software Engineer</td>
            <td>
              <button
                className="btn btn-info"
                onClick={() => viewEmployee("ajith")}
              >
                <FaEye /> View
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Amal</td>
            <td>Software Engineer</td>
            <td>
              <button
                className="btn btn-info"
                onClick={() => viewEmployee("amal")}
              >
                <FaEye /> View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Index;
