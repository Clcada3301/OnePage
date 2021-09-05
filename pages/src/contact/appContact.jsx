import './appContact.css'
function AppContact() {
    return (
        <div className='appCont'>

            <div className="wrapper">
                <div className='f'>
                <div className="icon facebook">
                    <div className="tooltip">Facebook</div>
                    <span><i>F</i></span>
                </div>
                </div>

                <div className='t'>
                <div className="icon twitter">
                    <div className="tooltip">Twitter</div>
                    <span><i>T</i></span>
                </div>

            </div>
                <div className='i'>
                <div className="icon instagram">
                    <div className="tooltip">Instagram</div>
                    <span><i className="fab fa-instagram">I</i></span>
                </div>

        </div>
                <div className='g'>
                <div className="icon github">
                    <div className="tooltip">Github</div>
                    <span><i>Git</i></span>
                </div>

</div>
                <div className='y'>
                <div className="icon youtube">
                    <div className="tooltip">Youtube</div>
                    <span><i>Y</i></span>
                </div>
</div>
            </div>
        </div>
    );
}

export default AppContact;