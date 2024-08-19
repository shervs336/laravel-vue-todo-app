<template>
    <div class="max-w-6xl bg-white shadow-md rounded-lg mx-auto p-4 my-10">
      <h3 class="text-lg font-semibold mb-4 md:flex items-center border-b pb-3">
        
        <ClockIcon v-if="group === 'pending'" class="size-6 text-red-500 mr-2" />
        <ArrowPathIcon v-else-if="group === 'in progress'" class="size-6 text-yellow-500 mr-2" />
        <ClipboardDocumentCheckIcon v-else class="size-6 text-green-500 mr-2" />
        {{ label(group) }}
        
      </h3>
      <ul v-for="todo in todos">
        <TodoItem :todo="todo" />
      </ul>
    </div>
</template>

<script setup>
    import { ClockIcon, ArrowPathIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/solid' 
    import TodoItem from './TodoItem.vue';
    const props = defineProps(['group', 'todos'])

    function label(group) {
        const words = group.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ")
    }
</script>