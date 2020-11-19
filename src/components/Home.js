import React, {useState} from 'react'
import './style.css'

const TemplateForm = (props) =>{

    const [users, setUsers] = useState()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/login/user/${username}/${password}`)
        .then(res => res.status === 200 ? props.history.push('/ItemList') : console.log('invalid login'))
    }

    const admin = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/admin/${username}/${password}`)
        .then(res => res.status === 200 ? props.history.push('/ItemList') : console.log('invalid login'))
    }
 

    return(
        <div className="container">
            <form className="form-container">
                <input type="text" onChange={(e) => setUsername(e.target.value)}  value={username} placeholder="Input username" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password" />
                <input type="submit" onClick={login} value="Login" />
                <input type="submit" onClick={admin} value="Admin Login" />
            </form>
        </div>
    )
}

export default TemplateForm;