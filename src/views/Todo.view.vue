<script setup>
import { ref, reactive } from 'vue'

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    update() {
        if (this.title === "" | this.description === "") {
            alert("This task require a title and a description!");
            return
        }
    }
}


class Kanban {
    constructor() {
        this.newTask = new Task('', '', '', '');
        this.tasks = [];
    }
    addTaskToKanban() {
        if (this.newTask.title === "" | this.newTask.description === "") {
            alert("This task require a title and a description!")
            return
        }
        this.tasks.unshift(this.newTask);
        this.newTask = new Task("", "", "", "");
    }

}

class Project {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    update() {
        if (this.title === "" | this.description === "") {
            alert("This project require a title and a description!");
            return
        }
    }
}

class ProjectKanban {
    constructor() {
        this.newProject = new Project('', '', '', '');
        this.projects = [];
    }
    addTaskToProjectKanban() {
        if (this.newProject.title === "" | this.newProject.description === "") {
            alert("This task require a title and a description!")
            return
        }
        this.projects.unshift(this.newProject);
        this.newProject = new Project("", "", "", "");
    }

}


const myKanban = reactive(new Kanban());
const myProjectKanban = reactive(new ProjectKanban());


// Day.js pour les dueDates
// vue.draggable.next

</script>


<template>
    <div class="container mx-auto">
        <!-- Pour ajouter un post-it -->
        <div class="h-50 w-50 ga-2 bg-slate-400">
            <input v-model="myKanban.newTask.title" placeholder="Title" />
            <input v-model="myKanban.newTask.description" placeholder="Description" />
            <input v-model="myKanban.newTask.dueDate" placeholder="due Date" />
            <input v-model="myKanban.newTask.priority" placeholder="Priority" />
        </div>
        <!-- Les 4 colonnes du projet-->
        <!-- Le menu à gauche pour les projets -->
    </div>
</template>