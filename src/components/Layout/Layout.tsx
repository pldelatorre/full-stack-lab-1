import Nav from './Nav/Nav';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';

export default function Layout() {
    return (
        <div className="layout">
            <nav className="nav"><Nav /></nav>
            <main className="main"><Outlet /></main>
            <footer className="footer"><Footer /></footer>
        </div>
    );
}