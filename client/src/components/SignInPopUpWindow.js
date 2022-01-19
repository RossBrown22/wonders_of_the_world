import './SignInPopUpWindow.css'

const SignInPopUpWindow = ({content, handlePopUpClose}) => {
    return(
        <div className="sign-in-pop-up">
            <div className="sign-in-pop-up-box">
                <span className="sign-in-close-pop-up" onClick={handlePopUpClose}>X</span>
                <div>
                {content}
                </div>
            </div>
        </div>
    )
}
export default SignInPopUpWindow;