// READ - SYNC
var data = fs.readFileSync(filename, 'utf8');
console.log(data);   
// READ
fs.readFile(filename, 'utf-8', function(error, body){
    if (error) console.error(error);
            
    console.log(body);
});
// CREATE
fs.writeFile(filename, content, function(error){
    if (error) console.error(error);
            
    console.log("OK");
});
// UPDATE
fs.appendFile(filename, content, function(error){
    if (error) console.error(error);
            
    console.log("OK");
});
// DELETE
fs.appendFile(filename, function(error){
    if (error) console.error(error);
            
    console.log("OK");
});