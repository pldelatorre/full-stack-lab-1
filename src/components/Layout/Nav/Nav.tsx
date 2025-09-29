import './nav.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router';

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="Pixell River Financial Logo" className='logo' />
            <h1>Pixell River Financial Organizational Structure</h1>
            <ul className="page-links">
                <Link to="/organization">
                    <li>Organization</li>
                </Link>
                <Link to="/employees">
                    <li>Employees</li>
                </Link>
            </ul>
            <button className="user-management-button">Log In</button>
        </nav>
    );
}


