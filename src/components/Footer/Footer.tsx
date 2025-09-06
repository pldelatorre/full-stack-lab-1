import './footer.css';

const currentYear: number = new Date().getFullYear();

function Footer() {
    return (
        <footer className='footer'>
            Copyright Pixel River Financial year {currentYear}
        </footer>
    )
}

export default Footer;
