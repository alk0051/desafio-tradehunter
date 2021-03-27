import express from 'express';
import routes from './routes/index.routes';


const app = express();

app.use(routes);

app.listen(3333);


console.log("listen in 3333...");


export default app;