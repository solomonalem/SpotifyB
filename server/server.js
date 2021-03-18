const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node')
const cors = require('cors')
const bodyParser = require('body-parser')

const app =  express();
app.use(cors())
app.use(bodyParser.json())
const PORT = 3001;

app.post('/refresh',(req ,res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId:'8a95e8689cd9491fbdc8bb6da35b2ea6',
    clientSecret:'e465306ce94f4fd4a06d6b4f07abbb26',
    refreshToken
})

// clientId, clientSecret and refreshToken has been set on the api object previous to this call.
spotifyApi
.refreshAccessToken()
.then(data => {
      res.json({
          accessToken: data.body.accessToken,
          expiresIn:data.body.expiresIn
      })
    })
.catch(()=>{
        res.sendStatus(400)
    })
  
})

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
    .catch((err) =>{
        console.log(err);
        res.sendStaus(400)
    })
})

app.listen(PORT, ()=>{
    console.log(`port running on ${PORT}`)
})