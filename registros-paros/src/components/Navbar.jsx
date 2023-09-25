import React, { useState, useRef, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../assets/css/componentes/navbar.css'


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    const ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (
                navbarOpen &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setNavbarOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
        };
    }, [navbarOpen]);

    return (
        <>
            <nav ref={ref} className="navbar">
                
                <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
                    {navbarOpen ? (
                    <MdClose 
                        style={{ 
                            width: '32px', 
                            height: '32px'
                        }} 
                    />) : (
                    <FiMenu
                        style={{
                            width: '32px',
                            height: '32px',
                        }}
                    />
                     )}
                </button>
                <div>
                <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}` }>
                    <li><Link className="menu-item" to="/politica" onClick={() => setNavbarOpen(false)}>POLÍTICA INOCUIDAD</Link></li>
                    <li><Link className="menu-item" to="/syso" onClick={() => setNavbarOpen(false)}>SYSO</Link></li>
                    <li><Link className="menu-item" to="/space" onClick={() => setNavbarOpen(false)}>SPACE</Link></li>
                </ul>
                </div>
            </nav>

        </>
    );
};
export default Navbar;
