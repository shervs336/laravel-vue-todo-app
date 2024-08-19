<template>
    <div>
        <form class="max-w-sm mx-auto" @submit.prevent="handleSubmit">
            <div class="mb-5">
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Subject</label>
                <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required v-model="subject"/>
            </div>
            <div class="mb-5">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required v-model="description"></textarea>
            </div>
            <div class="mb-5" v-if="todo_id">
                <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required v-model="status">
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="complete">Completed</option>
                </select>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const props = defineProps(['todo'])
    const emit = defineEmits(['submit-todo'])
    const subject = ref(props.todo ? props.todo.subject : '')
    const description = ref(props.todo ? props.todo.description : '')
    const status = ref(props.todo ? props.todo.status : '')
    const todo_id = ref(props.todo ? props.todo.id : '')

    function handleSubmit() {
        emit('submit-todo', 
            {
                'id': todo_id.value,
                'subject': subject.value,
                'status': status.value,
                'description': description.value,
            }
        )
    }
</script>