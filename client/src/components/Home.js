import React, {useState, useContext} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './style.css'
import { LoggerContext } from '../contexts/Logger'

const TemplateForm = (props) =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggerContext)
    const [error, setError] = useState("");

    const login = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/login/user/${username}/${password}`)
        .then(res => {
            if(res.status === 200 ){
                setIsLoggedIn(true)
                props.history.push('/ItemList') 
            }else{
                setError('Failed to Log in!')
            }
        })
    }

    const admin = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/admin/${username}/${password}`)
        .then(res => res.status === 200 ? props.history.push('/ItemList') : console.log('invalid login'))
    }
 

    return(
        <div className="form-container">
            <Card className="px-4 pb-4">
                <Card.Body>
                    <h2 className="text-center mb-4">Welcome to s!ope.</h2>  
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={login}>
                        <Form.Group id="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" onChange={(e) => setUsername(e.target.value)}  value={username} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                        </Form.Group><br/>
                        <Button className="w-100" type="submit">Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account ? <Link to="./Signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default TemplateForm;