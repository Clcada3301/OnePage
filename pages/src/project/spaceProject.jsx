import TableProject from "./tableProject";
import './project.css'
import {useEffect, useState} from "react";

function SpaceProject() {

const [countProject,setCountProject]=useState(0)
const pressClick=()=>{
setCountProject(countProject+1)
    if (countProject==4)
    {
        setCountProject(0)
    }
}

    const project=TableProject.map((item)=>
        <div  className='projects'>
<div className='projectFlex'>{item.project} {item.text}</div>
        </div>
    )
    return (
        <div className='app'>
            <div  >
                <div onClick={pressClick}>
                    {project[countProject]}
                </div>

            </div>
        </div>
    );
}

export default SpaceProject;