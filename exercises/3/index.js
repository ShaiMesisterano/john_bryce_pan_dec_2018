var http = require('http');
var User = require('../../modules/User');

http.createServer(function(request, response){
    var user = new User("David", "Cohen", 50, 167, "brown", false, 1);

    response.writeHead(200, {"Content-type": "text/html"});

    var html = `<h1>${user.firstName} ${user.lastName}</h1>
	<h2>${user.age}</h2>
    <h3>${user.height}</h3>`;
    
    // var message = user.isActive ? "<div style='color: green'>Active</div>" : "<div style='color: red'>Disconnected</div>";
    html += user.isActive ? "<div style='color: green'>Active</div>" : "<div style='color: red'>Disconnected</div>";

    // html = html + message;
    // html += message

    response.end(html);
}).listen(8000);