import { useContext, useState } from "react";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../firebase";
import "./login.scss"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import myIMG from "../../resourses/a.png";

const Login = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    dispatch({type: "LOGIN", payload: user})
    navigate("/")
    console.log(user);
    })
  .catch((error) => {
    console.error(error);
    setError(true)
  });
  }
  return (
    <div className="login">
      <div className="blanco">
      
      


      <div className="element-log-in">
      <div className="log-in-wrapper">
        <div className="log-in">
        <div className="forms">
        <form onSubmit={handleLogin}>
        <div className="overlap-3">
            
            <img className="untitled-design" alt="Untitled design" src={myIMG} />
          </div>
        <div className="text-wrapper-3">Cata - Outlet</div>
        <h1>Iniciar Sesion</h1>
        <h4>Ingrese su correo electrónico y contraseña a continuación</h4>
        <label>CORREO</label>
        <input type="email" placeholder="Correo" onChange={e=>setEmail(e.target.value)}/>
        <label>CONTRASEÑA</label>
        <input type="password" placeholder="Contraseña" onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Iniciar Sesion</button>
        {error && <span>Correo o Contraseña incorrectos</span>}
          </form>
        </div>  
        
          </div>
          
          
          
        </div>
      </div>
    </div>
    </div>
      
  )
}

export default Login