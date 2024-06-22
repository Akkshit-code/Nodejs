const fs = require('fs');

// console.log('READ START');
// Asynchronous way to read the file
// fs.readFile('input.txt' , function(err,data) {
//      if(err){
//           console.log('Error:', err);
//           return err;
//      }
//      console.log('Data : ' , data.toString());
//      console.log('OTHER STUFF');
//      console.log('READ END');
//      return data;
// });

// Synchronous way to read the file

// var data = fs.readFileSync('input.txt');
// console.log('Data : ' , data.toString());
//      console.log('READ END');
//      console.log('OTHER STUFF');



// Read = OPEN + WRITE;

// OPEN
const buf = new Buffer(1024);

fs.open('input.txt' , 'r+' , function(err,fd){
     if(err){
          console.log('Error Detected in Opening file');
     }
     console.log("Read Successfully");
    


     // WRITE
     fs.read(fd , buf , 0 , buf.length , 0 , function(er,bytes){
          if(er){
               console.log('Error Detected in reading file');
          }
          console.log('File Opened Successfully');
          console.log('Data : ' ,bytes);
     console.log('Data : ' ,buf.slice(0,bytes).toString());
          fs.close(fd,function(err,fd){
               if(err){
               console.log('Error Detected in Closing file');
               }
          console.log("Closed Successfully");
          })
})
})



                              // How to Write in the file

     // It will Override the data i.e it will replace the previous data with the new data
//      fs.writeFile('input.txt','PW SKILLS' , function(err){
//           if(err){
//                console.log("Error Detected");
//           }
//      console.log("Successfully written in the file");
// })


     // Appending in the file i.e it will add inside the file

// fs.appendFile('input.txt' , 'Akkshit-Singh' , 'utf8' , function(err){
//      if(err){
//           console.log("Error Detected");
//      }
//      console.log("Successfully written in the file");
// })



                    // Deleting file

fs.unlink('input.txt' , function(err){
     if(err){
          console.log('Error in deleting a file');
     }
     console.log('File Deleted Successfully');
})