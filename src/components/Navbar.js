function Navbar({ currentPage, handlePageChange }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand">John-Mark Sackett</div>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a aria-current="location" href='#About-Me'
                            onClick={() => handlePageChange('About-Me')} className={currentPage === 'About-Me' ? 'nav-link active' : 'nav-link'}>About Me</a></li>
                        <li className="nav-item"><a aria-current="location" href='#Projects'
                            onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;