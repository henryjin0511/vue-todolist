import * as types from './mutation-types'
export default {
	addItem ({commit},item) {
		commit(types.ADD_ITEM,item);
	},
	removeItem ({commit},itemId) {
		commit(types.REMOVE_ITEM,itemId);
	},
	markOn ({commit},itemId) {
		commit(types.MARK_ON,itemId);
	},
	markOff ({commit},itemId) {
		commit(types.MARK_OFF,itemId);
	},
	initData ({commit}) {
		commit(types.INIT_DATA);
	}
}