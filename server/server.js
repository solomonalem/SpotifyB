const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node')

const app =  express();

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId:'8a95e8689cd9491fbdc8bb6da35b2ea6',
        clientSecret:'e465306ce94f4fd4a06d6b4f07abbb26'
    })
    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refeeshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(() =>{
        res.sendStaus(400)
    })
})