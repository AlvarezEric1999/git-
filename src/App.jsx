import { useState } from 'react'
import logo from './assets/logo.png'
import Modal from './Modal'

function App() {
 
  //estados 
  const [ user, setUser] = useState("")
  const [password, setPassword]= useState('')
  const [open,setOpen] = useState(false)
  const [message,setMessage]= useState('')
  const [messageColor ,setMessageColor] = useState(true)

  const changeUser = (e)=>{

    setUser(e.target.value)
    console.log("user"+ e.target.value)
    
  }

  const ChangePassword=(e)=>{

    setPassword(e.target.value)
    console.log("contrasena : " + e.target.value)
  }


  //validacion de usuario y manejo de eventos
  const validateUser = (event)=>{


    event.preventDefault();
    
    console.log( message )
    if (user == "Eric" && password =="1061048375") {

      //alert("datos correctos")
      setOpen(true)
      setMessage("datos correctos")
      setMessageColor(false)

    }
    else{

      //alert("datos incorrectos")
      setOpen(true)
      setMessage("Datos Incorrectos")
      setMessageColor(true)



  }
  }
  return (
    <div>
    <main className="bg-purple-500 w-screen h-screen flex items-center justify-center  ">

    <section className="w-[350px] bg-white h-[500px] rounded-[8px] flex flex-col items-center justify-center">
    <img src={logo} className="w-[230px] h-[220]" alt=""/>
    
      <form className=" w-3/4 h-2/4  flex flex-col pt-[10px]">
          <input className="my-[10px] bg-gray-100 p-[8px]" type="text" placeholder="usuario"  name="user" value={user} onChange={changeUser}/>
          <input className=" p-[8px] bg-gray-100" type="text" placeholder="contrasena" name="password" value={password} onChange={ChangePassword}/>
          <button onClick={validateUser} className="my-[10px] text-white	 bg-purple-500 p-[8px]"><a href="./perfil.html" >Iniciar Sesion</a></button>
      </form>

    <div className="flex text-[10px]">

        <p className="px-[5px]">olvidaste tu contrasena?</p>
        <p className="px-[5px]">no tienes un cuenta?  <a href="./registro.html">registrate</a></p>

    </div>

  </section>

  </main>

  <Modal messageColor={messageColor} open={open} onClose={()=>setOpen(false)} message={message}></Modal>

    </div>
  )
}


export default App
