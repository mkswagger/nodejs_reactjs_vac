const Router = require("express"); //imported router from express
const {eventsRouter}= require("../modules/events/events.router");
const globalRouter = Router();

globalRouter.use("/api/events/",eventsRouter); //whwenevr events are encountered in that address, forward it to 
//events router

module.exports = {globalRouter}; //setting global router framework 
