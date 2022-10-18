<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
	title: {
		type: String,
		required: true
	},
});

const emit = defineEmits(["receiveTaskInfo"]);

const taskTitle = ref("");
const taskDescription = ref("");

function handleSubmit() {
	if (!taskTitle.value) return;

	emit("receiveTaskInfo", taskTitle, taskDescription);
}
</script>

<template>
	<form class="form">
		<h1 class="form__title">{{ props.title }}</h1>

		<label class="form__label">
			<input v-model="taskTitle" type="text" name="title" id="title" class="input form__input" placeholder="Título da tarefa" />
		</label>

		<label class="form__label">
			<textarea v-model="taskDescription" name="description" id="description form__description" class="input" placeholder="Descreva sua tarefa"></textarea>
		</label>

		<button @click.prevent="handleSubmit" class="button">Adicionar</button>
	</form>
</template>

<style scoped>
	.form {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 12px;
	}

	.form__title {
		text-transform: capitalize;
		letter-spacing: 0.4px;

		margin-bottom: 16px;
	}

	.form__label {
		width: 100%;
	}

	.form__input {
		width: 100%;
	}

	.form__description {
 	 	resize: none;
	}

	@media screen and (max-width: 768px) {
		.form__description {
			width: 400px;
		}
	}
</style>
