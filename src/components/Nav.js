import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        textDecoration: 'none'
    }
    return (
        <nav style={styles.nav}>
            <ul className="nav-links" style={styles.ul}>
                <Link style={navStyle} to="/" >
                    <li style={styles.li}>Home</li>
                </Link>
                <Link style={navStyle} to="/ships" >
                    <li style={styles.li}>Ships</li>
                </Link>
                <Link style={navStyle} to="/people" >
                    <li style={styles.li}>People</li>
                </Link>
                <Link style={navStyle} to="/films" >
                    <li style={styles.li}>Films</li>
                </Link>
                <Link style={navStyle} to="/vehicles" >
                    <li style={styles.li}>Vehicles</li>
                </Link>
                <Link style={navStyle} to="/species" >
                    <li style={styles.li}>Species</li>
                </Link>
                <Link style={navStyle} to='/planets'>
                    <li style={styles.li}>Planets</li>
                </Link>

            </ul>
        </nav>
    );
}

const styles = {
    ul: {
        width: "95%",
        height: "100%",
        display: "flex",
        listStyle: "none",
        justifyContent: "space-between",
    },
    li: {
        color: "yellow",
        fontSize: 36,

    },
    nav: {
        flex: 1,
        height: "100%",
        backgroundColor: "black",
    }
}

export default Nav;
