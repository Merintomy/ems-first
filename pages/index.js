
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router';


function Index() {

  const router = useRouter()

  const handleClick = () => {
     console.log('view all employees');
     router.push('/employee')
  }
  return (
    <div className="container">
      <h1 className="text-center my-4">Employee Management System</h1>

      <div className="mb-4">
        <p>
          Employee management refers to the processes used to ensure employees perform their best. It consists
          of keeping track of employees' achievements and progress, fostering healthy professional relationships,
          and giving them the tools they need to succeed. An employee management system is technology designed to
          streamline core HR services and improve workforce productivity. It accomplishes these goals largely by
          automating labor-intensive administrative tasks and using analytics to drive business decisions. Depending
          on the vendor, the HR product suite may include talent acquisition, payroll, timekeeping, benefits
          administration, and more. 
          <Link href='/about' >about More</Link>
          </p>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-secondary px-4 py-2" onClick={handleClick}>View All</button>
      </div>      
    </div>
  );
}

export default Index;
