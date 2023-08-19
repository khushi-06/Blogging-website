import mongoose from "mongoose";

const Connection = (USERNAME, PASSWORD) => {
  // Use backticks to create a template string
  const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.fd2wuzh.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
    });
};

export default Connection;
