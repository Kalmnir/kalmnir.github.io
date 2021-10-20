import { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "./pages/About-Me";
import Footer from "./Footer";
import Projects from "./pages/Projects";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About-Me');

    const renderPage = () => {
        if (currentPage === 'About-Me') {
            return <AboutMe />;
        }
        return <Projects />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default PortfolioContainer;