import './nav.css';
import logo from '../../assets/logo.png';

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="Pixell River Financial Logo" className='logo' />
            <h1>Pixell River Financial</h1>
            <ul className="page-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Mission/Vision</a></li>
                <li><a href="#">Business Goals and Objectives</a></li>
                <li><a href="#">Organizational Structure</a></li>
            </ul>
            <button className="user-management-button">Log In</button>
        </nav>
    );
}


