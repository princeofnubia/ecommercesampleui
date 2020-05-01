<template>
    <div class="admin-customer-search">
      <span style="position: fixed; margin:20px; right:16rem; width:3%; height:25px">&#x1f50d;</span>
    <b-form-input size="lg" v-model="text" placeholder="Enter your name"></b-form-input>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    }
  }
</script>