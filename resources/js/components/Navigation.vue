<template>
    <nav class="bg-white border-b border-gray-200 p-4 mb-4">
        <div class="container mx-auto flex justify-center md:justify-between">
        <router-link :to="{ name: 'Home' }" class="hidden md:flex text-xl font-semibold place-items-center space-x-2">
            <ClipboardDocumentListIcon class="size-6 text-black mr-2" /> Todo App
        </router-link>
        </div>
    </nav>
</template>

<script setup>
import { ClipboardDocumentListIcon } from '@heroicons/vue/24/solid'
</script>