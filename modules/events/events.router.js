const Router = require("express");
const {getEventsController,createEventController} = require("./events.controller");
const eventsRouter = Router();
eventsRouter.get("/getEvents",getEventsController); //what shd get events do - what?  controller
eventsRouter.post("/createEvent",createEventController);
//eventsRouter.get("/delete")
module.exports= {eventsRouter};

