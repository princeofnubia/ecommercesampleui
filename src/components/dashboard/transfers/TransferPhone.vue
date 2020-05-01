<template>
  <div class="">
      <div class="m-2 p-3 w-50">
          <h4><strong> Transfer </strong> </h4>
              <small style="display:block; font-size:10px">Send money to Phone Using Alajo</small>
          <div class="credit-form mt-3">
              <div style="display:inline-block"><strong>Amount</strong> </div>
              <b-form-input id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-input>
          </div>
          <div class="credit-form mt-3">
              <div style="display:inline-block"><strong>Phone Number</strong> </div>
              <b-form-input id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-input>
          </div>
          <div class="credit-form mt-3">
              <div style="display:inline-block"><strong>Description</strong> </div>
              <b-form-textarea id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-textarea>
          </div>
                <b-button size="lg" variant="success" class="px-5 mt-2" @click="show(['loanBoard', 200000])"> Submit </b-button> 
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        show(val) {
            if(Array.isArray(val)) {
                this.$store.commit("setCredit", val[1])
            }
            this.$root.$emit("show", val)
        }
    }
}
</script>

<style>
.credit-box {
    width:50%;
    border: 1px solid #ddd;
}
</style>