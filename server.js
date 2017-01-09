import express from 'express';
import schema from './js/data/schema';
import GraphQLHTTP from 'express-graphql';

import {MongoClient} from 'mongodb';

let app = express();
app.use(express.static('public'));


(async () => {
	let db = await MongoClient.connect("mongodb://csluni:csluni@ds155028.mlab.com:55028/csluni");

	app.use('/graphql', GraphQLHTTP({
		schema: schema(db),
		graphiql: true
	}));

	app.listen(3000, () => console.log("Listening on port 3000"));	
	
})();
