import earth from "./imgPlaneta/earth_PNG33.png";
import './planet.css'

function Earth() {
    return (
        <div >
            <img src={earth} alt="" className='earth'/>
        </div>
    );
}

export default Earth;