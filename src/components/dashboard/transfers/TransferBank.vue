<template>
  <div class="transfer-bank">
       <div class="m-2 p-1 w-50">
          <h4><strong> Transfer </strong> </h4>
              <small style="display:block; font-size:10px">Send money to any bank account holder</small>
          <div class="credit-form mt-2">
              <div style="display:inline-block"><strong>Enter Recipient Bank</strong> </div>
              <small style="display:block; font-size:10px">Choose from the list provided</small>
              <b-form-input id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-input>
          </div>
          <div class="credit-form mt-2">
              <div style="display:inline-block"><strong>Enter Account Number</strong> </div>
              <b-form-input id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-input>
          </div>
          <div class="credit-form mt-2">
              <div style="display:inline-block"><strong>Enter Amount</strong> </div>
              <b-form-input id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-input>
          </div>
          <div class="credit-form mt-2">
              <div style="display:inline-block"><strong>Description</strong> </div>
              <b-form-textarea id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-textarea>
          </div>
                <b-button size="lg" variant="success" class="px-5 mt-2" @click="show(['loanBoard', 200000])"> Submit </b-button> 
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sel {
    background: #fff url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center/8px 10px
}
</style>