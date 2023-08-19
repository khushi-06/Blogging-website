import { Express, Router } from "express";
import singupuser from "../controller/user_controll.js";

const Router =express.route();
     Router.post('/signup', singupuser);

export default Router
