<template lang="html">
  <div class="modal-backdrop d-f ai-c jc-c">
    <div class="modal-content">
      <div class="modal-header" v-if="header">
        <h2>{{header}}</h2>
      </div>
      <div class="modal-body">
        {{content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "This is the Header",
      content: ''
    }
  }
}
</script>

<style lang="sass">
  .d-f {
    display: flex;
  }
  .fd-c {
    flex-direction: column;
  }
  .ai-c {
    align-items: center;
  }
  .jc-c {
    justify-content: center;
  }
  .modal-backdrop {
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .modal-content {
    width: 620px;
    background-color: rgba(255,255,255, 1);
    padding: 10px;
  }
  .modal-header {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;

    h2 {
      margin: 0;
    }
  }

</style>
