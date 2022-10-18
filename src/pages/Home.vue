<script setup>
import { computed, ref } from "vue";

import Dialog from "../components/Dialog.vue";
import Form from "../components/Form.vue";
import Task from "../components/Task.vue";

const tasks = ref([]);
const dialogIsActive = ref(false);

const handleEmptyDesc = computed(() => {
	return tasks.value.map((task) => {
		if (!task.desc) return {...task, desc: "Sem descrição"};

		return task;
	});
});

function openDialog() {
	dialogIsActive.value = true;
}

function closeDialog() {
	dialogIsActive.value = false;
}

function handleAddTask(taskTitle, taskDescription) {
	closeDialog();
	tasks.value.push({id: Math.random(), title: taskTitle, desc: taskDescription});
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
			<ul class="tasks__list" v-for="task in handleEmptyDesc" :key="task.id">
				<Task :title="task.title" :description="task.desc" />
			</ul>
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
.tasks__list {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 24px;
}
</style>
