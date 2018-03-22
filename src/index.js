//
// PATH OF THIS FILE: ./src/index.js
//
// import style from "./public/css/style.css";

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;


import Vue from 'vue';
import AppComponent from './components/AppComponent.vue';

new Vue({
   render: h => h(AppComponent)
 }).$mount('#app')