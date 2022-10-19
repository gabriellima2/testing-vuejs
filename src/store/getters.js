export const getters = {
	getTaskById: (state) => (id) => {
		return state.tasks.find((task) => task.id == id);
	},
	getTasks: (state) => () => {
		return state.tasks.map((task) => {
			if (!task.description) return {...task, description: "Sem descrição"};

			return task;
		});
	}
};
