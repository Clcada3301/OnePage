import About from "./about";
import Project from "./project";
import Talk from "./talk";
import Contact from "./contact";
import './AppMeny.css'

function AppMeny() {
    return (
        <div className='AppMeny'>
            <div className='blockAbout'>
                <About/>
            </div>
            <div className='blockProject'>
                <Project/>
            </div>
            <div className='blockTalk'>
                <Talk/>
            </div>
            <div className='blockContact'>
                <Contact/>
            </div>


        </div>
    );
}

export default AppMeny;
