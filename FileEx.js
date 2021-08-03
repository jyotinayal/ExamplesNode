const fs = require('fs');
const path = require('path');

const content ="This file is created by me Jyoti Nayal";
const write1 = fs.writeFile('writeFile.txt', content, err => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Written succefully")
    }
});

const read1 = fs.readFile('writeFile.txt',(err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File Content");
        console.log(data.toString());
    }
});

const updatedContent = "I have Updated this content";
const append1 = fs.appendFile('writeFile.txt',updatedContent, err => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File Content Updated Successfully");
    }
});


const read2 = fs.readFile(path.join(__dirname + '/views' + '/about.html'),(err,data) => {
    if(err)
        console.log(err);
    else
        console.log(data.toString())
})
  
try {
    if (fs.existsSync('writemFile.txt') && fs.existsSync(path.join(__dirname + '/views' + '/about.html'))) {
      console.log("file exists");
    }
  } catch(err) {
    console.error("File doesn't exists..."+err)
  }

  const file2Content = "in second file";
  function write2(){ 
      fs.writeFile('writeFile2.txt', file2Content, err => {
        if(err){
            console.log(err)
        }
        else{
            console.log("Written succefully")
        }
      });
  }

const read3 = fs.readFile('writeFile2.txt',(err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File Content");
        console.log(data.toString());
    }
});

function delete1() {
    new Promise((resolve,reject) => {
    fs.unlink('writeFile2.txt',function(err){
    if(err)
        throw err;
    console.log("File Deleted");
});})
}

async function fileOperation(){
    await write1;
    await read1;
    await append1;
    await write2();
    await read2;
    await read3;
    await delete1();
}

fileOperation();

/* 
    let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});
*/