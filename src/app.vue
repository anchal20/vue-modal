<template lang="html">
  <div class="modal-backdrop d-f ai-c jc-c">
    <div class="modal-content">
      <div class="modal-header d-f jc-sb" :class="[borderBottom ? border-bottom : '']" >
        <h2 v-if="header">{{header}}</h2>
        <div class="cross-icon">x</div>
      </div>
      <div class="modal-body">
        <slot>{{content}}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueModal',
  props: ['header', 'content', 'borderBottom']
  // data() {
  //   return {
  //     header: "This is the Header",
  //     content: '',
  //     borderBottom: true
  //   }
  // }
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
  .jc-sb {
    justify-content: space-between;
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
  .border-bottom {
    border-bottom: 1px solid #ccc;
  }
  .modal-header {
    padding: 10px 0;

    h2 {
      margin: 0;
    }
  }

</style>
