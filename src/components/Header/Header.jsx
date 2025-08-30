import { Link } from 'react-router-dom';

const Header = () => {

    const headerStyle = {
        
        display: "flex",
        gap: "10px"

       
    }
    return (
        <div>
            <h1>Navbar</h1>
            <nav style={headerStyle}>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contactUs">Contact Us</a> */}

                {/* Link is Better version of <a></a> */}
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/about'>About</Link>
                <Link to='/contactUs'>Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;