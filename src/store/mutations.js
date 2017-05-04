import * as types from './mutation-types'
export default {
	[types.ADD_ITEM] (state,item) {
		state.list.push(item);
	},
	[types.REMOVE_ITEM] (state,itemId) {
		state.list.every ((ele,index) => {
			console.log(index);
			if(ele.itemId === itemId){
				state.list.splice(index,1);
				return false;
			}
			return true;
		});
	},
	[types.MARK_ON] (state,itemId) {
		state.list.every ((ele,index) => {
			console.log(index);
			if(ele.itemId === itemId){
				ele.status = 0;
				return false;
			}
			return true;
		});
	},
	[types.MARK_OFF] (state,itemId) {
		state.list.every ((ele,index) => {
			console.log(index);
			if(ele.itemId === itemId){
				ele.status = 1;
				return false;
			}
			return true;
		});
	}
}