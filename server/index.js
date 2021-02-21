const express = require('express');
const app = express();
const port = 3000;

require('./routes/main.routes.js')(app);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

