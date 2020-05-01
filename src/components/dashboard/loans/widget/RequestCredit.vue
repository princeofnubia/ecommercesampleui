<template>
  <div class="admin-loan-request admin-customer-list loan-request-detail">
      <b-button size="lg" variant="primary" class="mx-2" @click="show('loanBoard')"> <b-icon icon="arrow-left" />Go back </b-button> 
     
      <div class="credit-box m-2 p-3 w-50">
          <h4><strong> Request Credit </strong> </h4>
          <small style="font-size:9px">You can borrow money from Alajo to supplement your Operating Account and aid your service delivery</small>

          <div class="credit-form mt-3">
              <div style="display:inline-block"><strong>Amount</strong> </div>
              <small style="display:block; font-size:10px">How much do you want to borrow?</small>
              <b-form-input id="input-none" class="w-50 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-input>
          </div>
          <div class="credit-form mt-3">
              <div style="display:inline-block"><strong>Return Date</strong> </div>
              <small style="display:block; font-size:10px">When will you start paying back?</small>
              <b-form-datepicker class="w-50 mt-1" size="sm" placeholder="" ></b-form-datepicker>
          </div>
                <b-button size="lg" variant="success" class="px-5 mt-4" @click="show(['loanBoard', 200000])"> Submit </b-button> 
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