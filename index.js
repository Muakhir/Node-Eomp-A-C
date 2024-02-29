// index.js

import {userRouter,express} from "./Controller/userController.js";
import {productRouter} from "./Controller/productController.js"
import cookieParser from "cookie-parser";
import {errorHandling} from "./middleware/ErrorHandling.js"
import path from "path"
import cors from 'cors'
import { config } from "dotenv";
config()

const app = express();
const port = +process.env.PORT


app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended:true
    }),
    cookieParser(),
    cors({
        origin: '*',
        credentials:true
    })
)

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Credentials","true")
    res.header("Access-Control-Allow-Methods","*")
     res.header("Allow-Control-Request-Methods","*")
    res.header("Access-Control-Allow-Headers","*")
    res.header("Access-Control-Expose-Headers","Authorization")
    next();
})

app.get('^/$|eomp', (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port,()=>{
    console.log(`Server is running at Port: http://localhost:${port}`);
})