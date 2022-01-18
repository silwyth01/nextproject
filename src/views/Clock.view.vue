<script setup>
import { ref, reactive } from 'vue'

class Clock {
  constructor() {
    this.hours = 0;
    this.mins = 0;
    this.secs = 0;
    this.timer;
    this.output;
  }
  stop() {
    clearInterval(this.timer);
  };

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  };

  render() {
    let date = new Date();
    this.output = date.toLocaleTimeString('fr-FR');
    // const template = 'h:m:s';
    // this.hours = date.getHours();
    // if (this.hours < 10) this.hours = '0' + this.hours;

    // this.mins = date.getMinutes();
    // if (this.mins < 10) this.mins = '0' + this.mins;

    // this.secs = date.getSeconds();
    // if (this.secs < 10) this.secs = '0' + this.secs;

    // this.output = template
    //   .replace('h', this.hours)
    //   .replace('m', this.mins)
    //   .replace('s', this.secs);

    // console.log(this.output);
  }
}

let clock = reactive(new Clock());
clock.start()

</script>

<template>
  <h1>{{ clock.output }}</h1>

  <button @click="clock.stop()">Stop</button>
</template>

<style>
</style>
