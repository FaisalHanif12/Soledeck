import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'dotenv/config';
import { typeDefs } from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';
import connectDB from './db/connect.js';
import cors from 'cors'; // Import CORS module

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


const corsOptions = {
  origin: 'https://soledeckf.vercel.app', // Set specific origin
  credentials: true, 
};


app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: corsOptions }); // Apply CORS to Apollo Server as well
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  } catch (error) {
    throw new Error(error);
  }
};

startServer();
