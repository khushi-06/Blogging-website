import mongoose from "mongoose"


const Connection = ()=>{

// Import required modules using ES module syntax

// Replace 'YOUR_MONGODB_URI' with your actual MongoDB URI
const URI = 'mongodb+srv://guptakhushi622003:mogodb-khushi@cluster0.fd2wuzh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Finally Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
}


export default Connection