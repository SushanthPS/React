import Joinus from "./components/Joinus";
import Settings from "./components/Settings";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Help from "./components/Help";
import Login from "./components/Login";
import Search from "./components/Search";
import Home from "./components/Home";
import "./main.css";

import Main from "./components/Main";
import Box from "./components/Box";

const option = 3;

function App() {
    if (option === 1) {
        return (
            <div className="row-flex">
                <div className="column-flex">
                    <Joinus></Joinus>
                    <Login></Login>
                    <Search></Search>
                    <Home></Home>
                </div>
                <div className="column-flex">
                    <Settings></Settings>
                    <Contact></Contact>
                    <Help></Help>
                    <Download></Download>
                </div>
            </div>
        );
    } else if (option === 2) {
        return (
            <div className="row-flex">
                <div className="column-flex">
                    <Main name="JOIN US" cname="blue"></Main>
                    <Main name="LOGIN" cname="orange"></Main>
                    <Main name="SEARCH" cname="green"></Main>
                    <Main name="HOME" cname="pink"></Main>
                </div>
                <div className="column-flex">
                    <Main name="SETTINGS" cname="gray"></Main>
                    <Main name="CONTACT US" cname="red"></Main>
                    <Main name="HELP" cname="purple"></Main>
                    <Main name="DOWNLOAD" cname="brown"></Main>
                </div>
            </div>
        );
    } else if (option === 3) {
        return (
            <div className="margin-center">
                <Box
                    title="Mobile Operating System"
                    item1="Android"
                    item2="Blackberry"
                    item3="iPhone"
                    item4="Windows Phone"
                ></Box>
                <Box
                    title="Mobile Manufacturers"
                    item1="Samsung"
                    item2="HTC"
                    item3="Micromax"
                    item4="Apple"
                ></Box>
            </div>
        );
    }
}

export default App;
