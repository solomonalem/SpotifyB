import React from 'react'
import {Container} from 'react-bootstrap'

const AUTH_URL ="https://accounts.spotify.com/authorize?client_id=8a95e8689cd9491fbdc8bb6da35b2ea6&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20"

export default function Login() {
    
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{minHeight:'100vh'}}>
            <a className="btn btn-success btn-lg" href={ AUTH_URL}>Login With Spotify</a>
        </Container>
    )
}
