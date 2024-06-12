const express = require('express');

const app = express();

const n = "s";

app.listen(process.env.PORT, () =>
{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})