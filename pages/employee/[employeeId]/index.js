import { useRouter } from "next/router";
import React from "react";

const employees = [
  {
    id: "1",
    name: "Ajith",
    designation: "Software Engineer",
    email: "ajith@gmail.com",
    address: "Kochi, Kerala",
  },
  {
    id: "2",
    name: "Amal",
    designation: "Software Engineer",
    email: "amal@gmail.com",
    address: "Chennai, Tamil Nadu",
  },
];

function EmployeePage() {
  const router = useRouter();
  const { employeeId } = router.query;

  
  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  const employee = employees.find((emp) => emp.id === employeeId);

  
  if (!employee) {
    return <p>Employee not found</p>;
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1>Employee Details {employeeId}</h1>
      </div>
      <div className="container mt-5">
        <div className="card p-4 shadow">
          <div className="text-center">
            <h3>{employee.name}</h3>
            <h5 className="text-muted">{employee.designation}</h5>
          </div>
          <div className="mt-4">
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>Address:</strong> {employee.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeePage;
