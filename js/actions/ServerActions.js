import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
	receiveLins(links){
		console.log(" In ServerActions");
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_LINKS,
			links: links
		});
	}
};

export default ServerActions;