import React, { useState } from 'react';
import SignUpForm from '../SignUpForm';
/*import Login from '../../Login';
import firebase from '../../firebase';*/
import '../../App.css';

export default function SignUp() {

  const andminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  /*const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () =>{
    setEmail("");
    setPassword("");
  }

  const cleraErrors = () =>{
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () =>{
    cleraErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disable":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password" :
            setPasswordError(err.message);  
            break;
            default:break;
        }
      });
  }

  const handleSignup = () =>{
    cleraErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password" :
            setPasswordError(err.message);  
            break;
            default:break;
        }
      });
  }

  const handleLogout =() =>{
    firebase.auth().signOut();
  }

  const authListener = () =>{
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  }

  useEffect(() => {
    authListener();
  },[]);*/



  const SignUp = details =>{
    console.log(details);

    if(details.email === andminUser.email && details.password === andminUser.password){
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email

      });
    } else{
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () =>{
    setUser({name:"", email:""});
  }

  return (
    <div className='sign-up'>
      {(user.email !== "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>  
    
      ) : (
        <SignUpForm SignUp={SignUp} error={error} />
      )}
    </div>
  );
}
