import HeaderH1 from "./headerH1";
import HeaderP from "./headerP";
import Earth from "./earth";
import Mars from "./mars";
import Pluton from "./pluton";
import './header.css'
function Header() {
    return (
        <div className='header'>
            <div className='h1'>
                <HeaderH1/>
            </div>
            <div className='p'>
                <HeaderP/>
            </div>
            <div className='earth'>
                <Earth/>
            </div>
            <div className='mars'>
                <Mars/>
            </div>
            <div className='pluton'>
                <Pluton/>
            </div>

        </div>
    );
}

export default Header;