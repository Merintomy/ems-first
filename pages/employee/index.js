import Link from 'next/link';
import { FaEye } from 'react-icons/fa';

function Index() {
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
              <Link href={`/employee/1`}>
                <button className="btn btn-info">
                  <FaEye /> View
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Amal</td>
            <td>Software Engineer</td>
            <td>
              <Link href={`/employee/2`}>
                <button className="btn btn-info">
                  <FaEye /> View
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Index;
