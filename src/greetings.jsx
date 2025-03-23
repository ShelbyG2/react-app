const Greetings = (props) => {
  const greetingMessage = <h2>Welcome {props.username}</h2>;
  const loginMessage = <h2>Please login to continue!</h2>;
  return props.isLoggedIn ? greetingMessage : loginMessage;
};
export default Greetings;
