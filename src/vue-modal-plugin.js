const VueModalPlugin = {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        console.log("plugin mounted!");
      }
    });
  }
};

export default VueModalPlugin;
