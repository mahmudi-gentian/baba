import Footer from "./footer";
import Navbar from "./navbae";

const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
     );
}

export default Layout;