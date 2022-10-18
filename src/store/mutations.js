export const mutations = {
	addTask(state, payload) {
		if (!payload) return;

		state.tasks.push(payload);
	},
	removeTask(state, payload) {
		state.tasks = state.tasks.filter((task) => {
			if (task.id !== payload) return task;
		});
	}
};
