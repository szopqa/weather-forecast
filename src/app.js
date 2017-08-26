const express = require('express');
const bodyParser = require('body-parser');

const router =require('./routers/weatherRoutes.js');


const app = express();

app.use(bodyParser.json());


router.weatherRoutes(app);


const port = process.env.PORT || 8888;
app.listen(port,()=>console.log(`Server started on port ${port}`));
