const express = require("express");

const app = express();
const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Server is listening to request at port ${port}`);
});