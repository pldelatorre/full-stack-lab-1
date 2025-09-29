import './employees.css';
import employees from "../../../assets/employees.json"; // import JSON

export default function Employees() {
  return (
    <div className="employees">
      {Object.entries(employees).map(([department, names]) => (
        <div key={department}>
          <h3>{department}</h3>
          <ul className='department'>
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
