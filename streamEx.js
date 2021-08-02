const fileSystem = require("fs");
var data = "";

const readStream = fileSystem.createReadStream("writeFile.txt");

readStream.setEncoding("UTF8");

readStream.on("data", (chunk) => {
	data += chunk;
});

readStream.on("end", () => {
	console.log(data);
});

readStream.on("error", (error) => {
	console.log(error.stack);
});

var data = "Sample text";

const writeStream = fileSystem.createWriteStream("output.txt");

writeStream.write(data, "UTF8");



writeStream.end()



writeStream.on("finish", () => {
	console.log("Finished writing");
});

writeStream.on("error", (error) => {
	console.log(error.stack);
});



//readStream.pipe(writeStream); //piping