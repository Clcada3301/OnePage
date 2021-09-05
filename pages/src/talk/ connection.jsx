import './connection.css'
function Connection() {
    return (
        <div className='conect' >
            <div className='inputName' >
                <input type="text" placeholder='enter name' />
            </div>
            <div className='inputNumber'>
                <input type="text" placeholder='enter number'/>
            </div >
            <div className='inputMail'>
                <input type="text" placeholder='enter mail'/>
            </div>

<div className='buttons'>
    <button className='button'>Connection</button>
</div>

        </div>
    );
}

export default Connection;