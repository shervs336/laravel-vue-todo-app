<template>
    <div>
        <div class="max-w-6xl bg-white shadow-md rounded-lg mx-auto p-4 my-10">
            <h3 class="text-lg font-semibold">Welcome to your Vue SPA powered by Laravel.</h3>
        </div>
        <div class="max-w-6xl mx-auto my-10">
            <button type="button" class="bg-blue-500 px-4 py-3 rounded text-white hover:bg-blue-600"  @click="showModalForm = true">Add To Do</button>
        </div>
        <div v-for="(todos, group) in store.allTodos">
            <TodoList :group="group" :todos="todos"/>
        </div>

        <Vue3TailwindModal :showModal="showModalForm" @close="resetForm">
            <template #header>
                Add To Do
            </template>
            <TodoForm @submit-todo="submitTodo" :todo="selectedTodo"/>
        </Vue3TailwindModal>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todos.js'
import { onMounted, ref, watch } from 'vue';
import { notify } from "notiwind";
import TodoList from '@/components/Todo/TodoList.vue';
import TodoForm from '@/components/Todo/TodoForm.vue';

import { Vue3TailwindModal } from "vue3-tailwind-modal";

const showModalForm = ref(false);
const store = useTodoStore()
const { selectedTodo } = storeToRefs(store)

onMounted(async () => {
  await store.fetch_todos();
});

const submitTodo = async function(data) {
    const response = data?.id ? await store.update_todo(data) : await store.add_todo(data);
    
    if(response.data?.success) {
        await store.fetch_todos()
        
        if(data?.id) {
            store.set_selected_todo(null)
        }

        showModalForm.value = false

        notify({
            group: "todo",
            title: "Success",
            text: data?.id ? "Todo updated successfully!" : "New todo successfully added!"
        }, 2000)

        return;
    }


    notify({
        group: "todo",
        title: "Error",
        text: "Something went wrong trying to add a todo!"
    }, 2000)
}

const resetForm = function() {
    showModalForm.value = false
    store.set_selected_todo(null)
}

watch(selectedTodo,(data) => { 
    if(data?.id) {
        showModalForm.value = true
    }
})


</script>