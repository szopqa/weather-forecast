const express = require('express');
const router =require('./routers/weatherRoutes.js');

const app = express();

router.weatherRoutes(app);

const port = process.env.PORT || 8888;
app.listen(port,()=>console.log(`Server started on port ${port}`));

module.exports={
	app
};