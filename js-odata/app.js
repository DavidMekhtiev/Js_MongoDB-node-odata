const odata = require('node-odata');

const server = odata('mongodb://localhost/project');

server.resource('users', {
  first_name: String,
  salary: Number,
  image_url: String,
  posts: Array
});

server.listen(8080);
