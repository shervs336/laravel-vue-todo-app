<template>
    <nav class="bg-white border-b border-gray-200 p-4 mb-4">
        <div class="container mx-auto flex justify-center md:justify-between">
        <router-link :to="{ name: 'Home' }" class="hidden md:flex text-xl font-semibold place-items-center space-x-2">
            <span>Todo App</span>
        </router-link>
        </div>
    </nav>
</template>