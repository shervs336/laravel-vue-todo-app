<template>
    <li class="border p-4 mb-2">
        <p>{{ todo.subject }}</p>
        <p><small>{{ todo.description }}</small></p>
        <p><small v-if="todo.completed_at" class="text-green-500"><strong>Completed:</strong> {{ displayDate(todo.completed_at) }}</small></p>
        <div class="flex space-x-2 mt-3">
            <button type="button" @click="showEditTodoForm(todo)" class="text-xs bg-blue-500 hover:bg-blue-600 py-2 px-2 rounded-sm shadow-md text-white flex">
                <TrashIcon class="size-4"/> Edit
            </button>
            <button type="button" @click="deleteTodo(todo)" class="text-xs bg-red-500 hover:bg-red-600 py-2 px-2 rounded-sm shadow-md text-white flex">
                <PencilSquareIcon class="size-4"/> Remove
            </button>
        </div>
    </li>
</template>

<script setup>
    import { useTodoStore } from '@/stores/todos.js'
    import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/solid';
    import { notify } from "notiwind";
    const props = defineProps(['todo'])
    const store = useTodoStore()

    function displayDate(date) {
        const completed = new Date(date)

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        return completed.toLocaleDateString("en-US", options)
    }

    function showEditTodoForm(todo) {
        store.set_selected_todo(todo)
    }
    
    const deleteTodo = async function (todo) {
        let response = await store.delete_todo(todo)
        
        if(response.data.success) {
            notify({
                group: "todo",
                title: "Success",
                text: "Todo removed successufully!"
            }, 2000)

            store.fetch_todos()
        }        
        
    }
</script>