/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Nathaniel Needham
Noah Mauro
Praveen Tripathi*/

import { useState } from 'react'
// import './Login.css'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();

    //Check if email and password went through
    console.log('login successful')
  
      try {
        const response = await fetch('http://localhost:3000/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data))
        console.log("token: " + localStorage.getItem("user"))
        console.log("data: " + data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return (
    <div className="wrapper">
    <div className="form-box login">
      <h2>Login</h2>
      <form action="#" onSubmit={handleLogin}>
        <div className="input-box">
          <span className="icon"><ion-icon name="mail"></ion-icon></span>
          <input type="email" required
           value={email}
           onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
        </div>

        <div className="input-box">
          <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
          <input type="password" 
          required value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
          <label>Password</label>
        </div>

        <button type="submit" className="btn">Login</button>

        <div className="register">
          <p>Create an Account <a href="Signup.html" className="register-link">Register Here</a></p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default LoginForm