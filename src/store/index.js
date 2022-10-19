import { createStore } from "vuex";

import { mutations } from "./mutations";
import { getters } from "./getters";
import { state } from "./state";

export const store = createStore({
	state() {
		return state;
	},
	getters,
	mutations
});

