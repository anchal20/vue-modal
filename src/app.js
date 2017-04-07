import vue from 'vue';
import app from './app.vue';

new vue({
  el: '#app',
  render: h => h(app)
});

exports.printMsg = function() {
  console.log("hello modal");
}
