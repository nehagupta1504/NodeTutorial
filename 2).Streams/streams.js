const fs = require("fs");

//creating a big file
// const writer = fs.createWriteStream("big.file");

// for (let i = 0; i < 50000; i++) {
//   writer.write(
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quasi fugit aliquam laborum eum sunt quidem accusantium fuga dolor. Facere voluptates quaerat explicabo obcaecati laudantium cum dolorum numquam, vitae perferendis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quasi fugit aliquam laborum eum sunt quidem accusantium fuga dolor. Facere voluptates quaerat explicabo obcaecati laudantium cum dolorum numquam, vitae perferendis!, "
//   );
// }

// writer.end();

//Reading  that big file - creating a readble stream

const readableStream = fs.createReadStream("big.file");

// We want the chunks
//!  4 diff ways of reading a stream
// 1). .on('data); //most popular

let count = 0;
readableStream.on("data", function (chunk) {
  //will print big.file data in multiple chunks
  count++;
  console.log(chunk.toString().length);
});

//A stream is an event emitter since we can perform .on

// To print the number of chunks - 358
//21MB ~~ size of file - 65536*357 + 3648
setTimeout(() => {
  console.log({ count });
}, 1000);

//2nd) Method using pipes //use less if we dont have any writable stream
//source ======(pipe) destination
//process.stdout - pipe the data to the screen
// readableStream.pipe(process.stdout);

//lets create a new writable stram & pipe it to that
const writable = fs.createWriteStream("copyOfBigFile");
readableStream.pipe(writable);
//Previously we didn't have any file named as *copyOfBigFile* but after exceution we get
//a file *copyOfBigFile*  having data same as big.file
//writing on response

// app.get("/", (req, res) => {
//   //send the data to the client in chunks
//   readableStream.pipe(res);
// });

//3rd). Method (Async for loop/for await) //best syntax
async function main() {
  //newer version of for of when the elements in the for of r promises we can use for await
  console.log("Asunf/ for await");
  for await (const chunk of readableStream) {
    console.log(chunk.toString().length);
  }
}

main();

//4th method readable event(advance)
