import './PopUpWindow.css'

const PopUpWindow = ({content, handlePopUpClose}) => {
    return(
        <div className="pop-up">
            <div className="pop-up-box">
                <span className="close-pop-up" onClick={handlePopUpClose}>X</span>
                {content}
                <button className='close-button' onClick={handlePopUpClose}>Close</button>
            </div>
        </div>
    )
}
export default PopUpWindow;