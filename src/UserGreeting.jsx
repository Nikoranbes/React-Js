import PropTypes from 'prop-types'


function UserGreeting(props){
   
    const welcomeMessage = <h2 className="welcome-text">Welcome {props.username}</h2>
    const loginAlert = <h2 className="login-alert">Please log in</h2>

    return(props.isLoggedIn? welcomeMessage: loginAlert);
}


UserGreeting.proptypes ={
    username : PropTypes.string,
    isLoggedIn : PropTypes.bool
}

UserGreeting.defaultProps={
    username:"Krishna",
    isLoggedIn:true
}
export default UserGreeting