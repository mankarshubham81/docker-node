const express = require('express');
const app = express();

const PORT =  process.env.PORT || 7000;

app.get('/', (req,res) => {
    return res.json({ message: "this in nodejs in container"})
});

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
  })


//   Docker command
//   docker build -t docker101-nodejs .
// docker run -it -p 7000:7000 docker101-nodejs
// docker run -it -e PORT=4000 -p 4000:4000 docker101-nodejs