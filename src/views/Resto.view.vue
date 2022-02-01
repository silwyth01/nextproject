<script setup>
import { ref, reactive } from 'vue'
const show = ref("Home");


</script>

<template>
    <div class="container bg-slate-200">
        <div class="flex items-center">
            <div class="basis-1/3">
                <button type="button" @click="show = 'Home'">Homepage</button>
            </div>
            <div class="basis-1/3">
                <button type="button" @click="show = 'Menu'">Menu</button>
            </div>
            <div class="basis-1/3">
                <button type="button" @click="show = 'Contact'">Contact</button>
            </div>
        </div>
        <div class="flex bg-red-200">
            <div class="basis-1/4 bg-slate-500">
                <h1 class="text-xl font-bold text-center align-middle">Resto Ô p'tit creux</h1>
            </div>
            <div class="basis-3/4 bg-slate-900">
                <img src="/src/assets/logo.png" />
            </div>
        </div>
        <div v-show="show === 'Home'">
            <div>
                <p>Irure consectetur elit aliquip pariatur anim sint sunt in culpa. Quis et nostrud sit excepteur do enim. Nisi in anim ea elit voluptate enim magna do. Non velit deserunt aliqua dolor laborum et. Eiusmod non aute dolore nulla. Sit incididunt proident pariatur ex veniam. Cupidatat anim elit Lorem mollit Lorem cillum non qui incididunt.</p>
            </div>
            <div>
                <p>Irure consectetur elit aliquip pariatur anim sint sunt in culpa. Quis et nostrud sit excepteur do enim. Nisi in anim ea elit voluptate enim magna do. Non velit deserunt aliqua dolor laborum et. Eiusmod non aute dolore nulla. Sit incididunt proident pariatur ex veniam. Cupidatat anim elit Lorem mollit Lorem cillum non qui incididunt.</p>
            </div>
            <div>
                <p>Irure consectetur elit aliquip pariatur anim sint sunt in culpa. Quis et nostrud sit excepteur do enim. Nisi in anim ea elit voluptate enim magna do. Non velit deserunt aliqua dolor laborum et. Eiusmod non aute dolore nulla. Sit incididunt proident pariatur ex veniam. Cupidatat anim elit Lorem mollit Lorem cillum non qui incididunt.</p>
            </div>
        </div>
        <div v-show="show === 'Menu'">
            <div>
                <p>Petite Poutine</p>
            </div>
            <div>
                <p>Moyenne Poutine</p>
            </div>
            <div>
                <p>Esti d'grosse Poutine</p>
            </div>
        </div>
        <div v-show="show === 'Contact'">
            <div>
                <p>Jean-Pierre</p>
            </div>
            <div>
                <p>Paul</p>
            </div>
            <div>
                <p>Le reste</p>
            </div>
        </div>
    </div>
</template>