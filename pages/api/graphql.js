import cors from 'cors';
import { ApolloServer } from 'apollo-server-micro';

import dbConnect from '../../backend/config/dbConnect';
import typeDefs from '../../backend/schemas/typeDefs';
import resolvers from '../../backend/schemas/resolvers';

dbConnect();

let apolloServer;

if (!apolloServer) {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
}

let isApolloServerStarted = false;

export const config = {
    api: {
        bodyParser: false,
    },
};

const corsOptions = process.env.NODE_ENV === 'production'
    ? { origin: process.env.NEXT_PUBLIC_GRAPHQL_API }
    : { origin: '*' };


export default async (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        // Run the cors middleware
        await new Promise((resolve, reject) => {
            cors(corsOptions)(req, res, (result) => {
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });

        if (req.method === 'OPTIONS') {
            res.end();
            return;
        }

        if (!isApolloServerStarted) {
            await apolloServer.start();
            isApolloServerStarted = true;
        }

        return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
    } else {
        res.status(403).send('Forbidden');
    }
};

