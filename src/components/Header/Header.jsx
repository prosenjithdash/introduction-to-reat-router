import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contactUs">Contact Us</a> */}

                {/* Link is Better version of <a></a> */}
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/about'>About</Link>
                <Link to='/contactUs'>Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;