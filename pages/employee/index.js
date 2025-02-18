import { useRouter } from "next/router";
import { FaEye } from "react-icons/fa";

function Index() {
  const router = useRouter();

  const employees = [
    { id: 1, name: "Ajith", designation: "Software Engineer" },
    { id: 2, name: "Amal", designation: "Software Engineer" },
  ];

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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => viewEmployee(employee.name.toLowerCase())}
                >
                  <FaEye /> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
