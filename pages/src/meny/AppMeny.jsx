import About from "./about";
import Project from "./project";
import Talk from "./talk";
import Contact from "./contact";
import './AppMeny.css'

function AppMeny() {
    return (
        <div className='AppMeny'>
            <div className='about'>
                <About/>
            </div>
            <div className='project'>
                <Project/>
            </div>
            <div className='talk'>
                <Talk/>
            </div>
            <div className='contact'>
                <Contact/>
            </div>


        </div>
    );
}

export default AppMeny;
