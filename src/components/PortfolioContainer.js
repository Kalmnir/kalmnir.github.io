import { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "./pages/About-Me";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About-Me');

    const renderPage = () => {
        if (currentPage === 'About-Me') {
            return <AboutMe />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default PortfolioContainer;