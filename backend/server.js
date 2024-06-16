const express = require('express') // Importing express app
const bodyParser = require('body-parser');
dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

//express app
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()  
})

// app.use(workoutRoutes)

app.use('/api/workouts',workoutRoutes)



//connecting to mongoose 
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT,()=>{
            console.log('connected to db and listening on port ', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })

//routes
// app.get('/',(req,res)=>{
//     res.json({msg:'Hello'})
// })
//listen for requests



