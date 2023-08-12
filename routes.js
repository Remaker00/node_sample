const fs = require('fs');

const requesthandler = (req, res) => {
    if(req.url ==='/') {
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (!err) {
                res.write('<p>' + data + '</p>');
            }
            res.write('<html>');
            res.write('<head><title>My First Page</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            res.end();
        });
     
    }
    
    if (req.url ==='/message' && req.method ==="POST") {
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsebody = Buffer.concat(body).toString();
            const message = parsebody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302
                res.setHeader('Location','/');
                return res.end();
            }); 
        });   
    }
};

module.exports = requesthandler;
