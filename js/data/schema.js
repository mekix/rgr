import {
	GraphQLSchema, 
	GraphQLObjectType, 
	GraphQLString,
	GraphQLInt
} from "graphql";

let schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name:"Query",
		fields:() => ({
			counter:{
				type: GraphQLInt,
				resolve:() => 45
			},
			message:{
				type: GraphQLString,
				resolve: () => "Hello GraphQL"
			}
		})
	}),

	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: () => ({
			incrementCounter: {
				type: GraphQLInt,
				resolve: () => ++counter
			}
		})
	})
});

export default schema;