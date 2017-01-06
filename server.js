import express from 'express';
import schema from './js/data/schema';
import GraphQLHTTP from 'express-graphql';

import {MongoClient} from 'mongodb';

let app = express();
app.use(express.static('public'));

app.use('/graphql', GraphQLHTTP({
	schema: schema,
	graphiql: true
}));

let db;

MongoClient.connect("mongodb://csluni:csluni@ds155028.mlab.com:55028/csluni", (err, database) => {
	if(err) throw err;

	db =  database;
	app.listen(3000, () => console.log("Listening on port 3000"));	
});

app.get("/data/links", (req, res) => {

	db.collection("links").find({}).toArray((err, links) => {
		if(err) throw err;

		res.json(links);
	})
});