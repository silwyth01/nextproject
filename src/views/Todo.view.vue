<script setup>
import { ref, reactive } from 'vue'

class Task {
    constructor(title) {
        this.title = title;
    }
}


class Kanban {
    constructor() {
        this.newTask = new Task('');
        this.tasks = [];
    }
    addTaskToKanban() {
        if (this.newTask.title === "") {
            alert("This task require a title !")
            return
        }
        this.tasks.unshift(this.newTask);
        this.newTask = new Task("", "");
    }

}



const myKanban = reactive(new Kanban());
const petiteTache = new Task('Poutine', 'faire une frite')
myKanban.tasks.unshift(petiteTache)

let show = false;
// Day.js pour les dueDates
// vue.draggable.next

</script>


<template>
    <div class="container mx-auto">
        <div>
            <div class="bg-gray-200 flex rounded-lg justify-center my-5 py-3">
                <h1>To Do</h1>
                <div class="flex rounded-lg px-3">
                    <button class="rounded px-2 bg-yellow-400">+</button>
                </div>
            </div>
        </div>
        <div v-if="patate === true" class="bg-gray-200 flex rounded-lg justify-center my-5 py-3">
            <input v-model="myKanban.newTask.title" placeholder="Title" />
            <div class="flex rounded-lg px-3">
                <button class="rounded px-2 bg-yellow-400" @click="myKanban.addTaskToKanban()">Save</button>
            </div>
        </div>
        <div
            class="bg-gray-200 flex rounded-lg justify-center my-5 py-3"
            v-for="task in myKanban.tasks"
        >{{ task.title }}</div>
    </div>
</template>