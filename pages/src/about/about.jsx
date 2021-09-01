import TextOne from "./textOne";
import TextTwo from "./textTwo";
import TextThree from "./textThree";
import './abouts.css'
function About() {
    return (
        <div className='abouts'>

            <div className='h'>
                <h1 >Who we are.</h1>
            </div>

            <div className='one'>
                <TextOne/>
            </div>

            <div className='two'>
                <TextTwo/>
            </div>

            <div className='three'>
                <TextThree/>
            </div>

        </div>
    );
}

export default About;