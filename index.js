import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/Routes.js'
import Connection from './database/db.js';
import path from 'path';
import socketConnection from './socket/socket.js';



const __dirname = path.resolve();


const app = express();
 
app.use(cors());
app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Routes);

app.use(express.static(path.join(__dirname,"./Client/build")));
app.get("*",function(_, res){
    res.sendFile(path.join(__dirname,"./Client/build/index.html"), function(err) {
        res.status(500).send(err);
    })
})  

Connection()

//creating server
export const PORT = process.env.PORT || 8000;


socketConnection()




app.listen(PORT, () => console.log(`server is running successfully on PORT ${PORT}`))

