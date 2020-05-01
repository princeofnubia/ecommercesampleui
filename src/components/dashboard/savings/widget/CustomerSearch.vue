<template>
    <div class="admin-customer-search">
      <b-input-group size="lg" class="mt-3">
    <template v-slot:append>
      <b-input-group-text style="background-color: white; border-left: none"><strong class="text-dark"><b-icon icon="search"/></strong></b-input-group-text>
    </template>
    <b-form-input style="background-color: white; border-right: none"></b-form-input>
  </b-input-group>
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