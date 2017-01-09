import {
	GraphQLSchema, 
	GraphQLObjectType, 
	GraphQLString,
	GraphQLList,
	GraphQLInt
} from "graphql";

// NEED ACCESS TO MONGO DB
let Schema = (db) => {

	let LinkType = new GraphQLObjectType({
		name:'Link',
		fields: () => ({
			_id: {type: GraphQLString},
			title: {type: GraphQLString},
			url: {type: GraphQLString}
		})
	});

	let schema = new GraphQLSchema({
		query: new GraphQLObjectType({
			name:"Query",
			fields:() => ({
				links:{
					type: new GraphQLList(LinkType),
					resolve:() => db.collection("links").find({}).toArray()
				}
			})
		})
	});
	return schema;
};

export default Schema;