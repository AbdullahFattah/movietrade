import express from 'express';

const routes = express.Router();

routes.get("/movies",(req,res)=>{
    res.send("Here's the list of available movies")
})

export default routes;