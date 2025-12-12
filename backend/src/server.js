import dotenv from "dotenv"
import express from "express"
import cors from "cors"

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5050
connectDB();

app.use("/api/notes", notesRoutes)


app.use(express.json())//allows JSOn to be parsed
app.use(rateLimiter)
app.use(cors())
//custom middleware
// app.use((req, res)=> {
//     console.log("Request sent successfully")
//     next()
// })
app.listen(PORT, ()=>{
    console.log('server running on port', PORT)
})

