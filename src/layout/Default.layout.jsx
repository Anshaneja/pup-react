import react from "react";
   

//Components
import Navbar from "../components/Navbar/navbar.component";
import Footer from "../components/Footer/footer.component";

const DefaultLayout = (props) => {
    return (
        <>
       <Navbar />
        {props.children}
        
        <Footer />
        </>
    );
};

export default DefaultLayout;