import express from "express";
const router = express.Router();

//controllers
import { showMessage } from "../controllers/auth"

router.get("/:message", showMessage);


// export default router;  since we are using required in server.js to import
//we should use 
module.exports = router;