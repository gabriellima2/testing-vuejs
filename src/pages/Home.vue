<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import TaskList from "../components/Task/TaskList.vue";
import Dialog from "../components/Dialog.vue";
import Form from "../components/Form.vue";

const dialogIsActive = ref(false);

const store = useStore();

const handleEmptyDesc = computed(() => {
	/*return tasks.value.map((task) => {
		if (!task.desc) return {...task, desc: "Sem descrição"};

		return task;
	});*/
	return "";
});

function openDialog() {
	dialogIsActive.value = true;
}

function closeDialog() {
	dialogIsActive.value = false;
}

function handleAddTask(taskTitle, taskDescription) {
	closeDialog();

	const task = {id: Math.random(), title: taskTitle, desc: taskDescription};
	store.commit("addTask", task);
}
</script>

<template>
	<div class="container">
		<main class="main">
			<h1>Foco e Organização para realizar suas tarefas</h1>
			<Dialog
				:isActive="dialogIsActive"
				:handleClose="closeDialog"
				:handleOpen="openDialog"
				buttonText="+"
			>
				<Form @receiveTaskInfo="handleAddTask" title="Adicionar tarefa"/>
			</Dialog>
		</main>

		<section>
			<TaskList />
		</section>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.main {
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 24px;

	margin-top: 236px;
	margin-bottom: 60px;
}
</style>
