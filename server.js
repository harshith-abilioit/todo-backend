import  express  from "express";
import cors from 'cors'
import connec from "./database/connec.js";
import endpoints from "./routes/taskroutes.js";


const app=express()
app.use(cors())
app.use(express.json())
app.use(endpoints)



connec().then(()=>{
    try{
        app.listen(5000,()=>{
            console.log('listing to 5000')
        })
    }catch(err){
        console.log('cannot connect with the server')
    }

}).catch((err) => {
    console.log('failed to connect with the database')
})



