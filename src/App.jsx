import { Route, Routes } from "react-router-dom";


// Import HOC
import DefaultHOC from "./HOC/Default.HOC";

//Components
import DefaultLayout from "./layout/Default.layout";
import Navbar from "./components/Navbar/navbar.component";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer/footer.component";
import DonateNow from "./Pages/DonationPage";
import SearchPage from "./Pages/SearchPage";
import SignUp from "./Pages/SignUp"
import Terms from "./Pages/Terms"
import MembershipPage from "./Pages/MembershipPage";
import SignIn from "./Pages/SignIn";
import Forgot from "./Pages/Forgot";
import Reset from "./Pages/Reset";
import Security from "./Pages/Security";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectDesc from "./Pages/ProjectDesc";
import Homecopy from "./Pages/HomePage1";
import Research1 from "./Pages/research";
import Research2 from "./Pages/research2";
import Research3 from "./Pages/research3";
import Research4 from "./Pages/research4";
import ContactForm from "./Pages/ContactForm";


function Layouts(Component){
  return (
    <>
     <DefaultLayout>
                <Component />
            </DefaultLayout>
    </>
  )
}


function App() {
  return (
    <>
  
    <Routes>
    <Route path="/:goto" exact element={Layouts(HomePage)} />
    <Route path="/contactform" exact element={Layouts(ContactForm)} />
    <Route path="/home" exact element={Layouts(HomePage)} />
    <Route path="/search" exact element={Layouts(SearchPage) }/>
    <Route path="/donate" exact element= {Layouts(DonateNow)}></Route>
    <Route path ='/signup' exact element={Layouts(SignUp)}/>
    <Route path ='/terms' exact element={Layouts(Terms)}/>
    <Route path='/member' exact element={Layouts(MembershipPage)} />
    <Route path ='/signin' exact element={Layouts(SignIn)} />
    <Route path= '/forgot' exact element={Layouts(Forgot)} />
    <Route path= '/reset' exact element={Layouts(Reset)} />
    <Route path= '/security' exact element={Layouts(Security)} />
    <Route path= '/projects' exact element={Layouts(ProjectsPage)} />
    <Route path= '/projectdesc/:id' exact element={Layouts(ProjectDesc)} />
    <Route path= '/' exact element={Layouts(Homecopy)} />
    <Route path= '/research1' exact element={Layouts(Research1)} />
    <Route path= '/research2' exact element={Layouts(Research2)} />
    <Route path= '/research3' exact element={Layouts(Research3)} />
    <Route path= '/research4' exact element={Layouts(Research4)} />
    
    
    </Routes>
    
    </>
  );
}

export default App;