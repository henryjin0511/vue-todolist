import * as types from './mutation-types'
export default {
	[types.ADD_ITEM] (state,item) {
		state.list.push(item);
		window.localStorage.setItem("tododata", JSON.stringify(state.list));
	},
	[types.REMOVE_ITEM] (state,itemId) {
		state.list.every ((ele,index) => {
			if(ele.itemId === itemId){
				state.list.splice(index,1);
				window.localStorage.setItem("tododata", JSON.stringify(state.list));
				return false;
			}
			return true;
		});
	},
	[types.MARK_ON] (state,itemId) {
		state.list.every ((ele,index) => {
			if(ele.itemId === itemId){
				ele.status = 0;
				window.localStorage.setItem("tododata", JSON.stringify(state.list));
				return false;
			}
			return true;
		});
	},
	[types.MARK_OFF] (state,itemId) {
		state.list.every ((ele,index) => {
			if(ele.itemId === itemId){
				ele.status = 1;
				window.localStorage.setItem("tododata", JSON.stringify(state.list));
				return false;
			}
			return true;
		});
	},
	[types.INIT_DATA] (state) {
		if (window.localStorage.getItem("tododata")) {

			state.list = JSON.parse(window.localStorage.getItem("tododata"));
		}
		else state.list = [];
	}
}