import './body.css';
import employees from "../../assets/employees.json"; // import JSON

function Body() {
  return (
    <div className="body">
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
  );
}

export default Body;