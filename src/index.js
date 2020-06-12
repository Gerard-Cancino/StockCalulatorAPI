import * as express from 'express';
import * as bodyparser from 'body-parser';

const port = 2000;

const app = express();


//Middleware
app.use(bodyparser.json());

//Routes

app.listen(port,()=>{
  console.log(`App has started on port ${port}`);
});