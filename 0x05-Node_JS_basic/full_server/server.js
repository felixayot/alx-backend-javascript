// Express server that:
// uses the routes defined in full_server/routes/index.js
// runs on port 1245

const express = require('express');
const mapRoutes = require('./routes/index');

const app = express();
const port = 1245;

mapRoutes(app);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
