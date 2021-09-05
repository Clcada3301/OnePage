import AppMeny from "./AppMeny";
import {useState} from "react";

function About() {
    const [styleButon,setStyleButon]=useState({

        height: '50px',
        width: '200px',
        fontSize: '23px',
        backgroundColor: 'Transparent',
        backgroundRepeat:'no-repeat',
        color:'black',
        border: 'none',
        borderRadius: '20px'

    })
    const click=()=>{

            setStyleButon({

                height: '50px',
                width: '200px',
                fontSize: '23px',
                backgroundColor: '#3b5999',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                border: 'solid #3b5999',
                borderRadius: '20px',
                transition:  'background-color 1s'
            })
    }
    const leaveClick=()=>{

        setStyleButon({

            height: '50px',
            width: '200px',
            fontSize: '23px',
            backgroundColor: 'Transparent',
            backgroundRepeat:'no-repeat',
            color:'black',
            border: 'none',
            borderRadius: '20px'

        })
    }
    return (
        <div className='buttonMeny'>
            <button style={styleButon} onMouseEnter={click} onMouseLeave={leaveClick}>About</button>
        </div>
    );
}

export default About;