<template>
    <div class="w-50 withdraw">
             <div class="m-2 p-2 w-50">
          <h4><strong> Withdrawal</strong> </h4>
              <small style="display:block; font-size:10px">Help customer withdraw money from their account</small>
          <div class="credit-form mt-3">
              <div style="display:inline-block; font-size:12px;"><strong>Enter Amount</strong> </div>
              <b-form-input id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-input>
          </div>
          <div class="credit-form mt-3">
              <div style="display:inline-block; font-size:12px;"><strong>Enter Customer Phone Number</strong> </div>
              <b-form-input id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-input>
          </div>
          <div class="credit-form mt-3">
              <div style="display:inline-block; font-size:12px;"><strong>Enter Agent Phone Number</strong> </div>
              <b-form-input id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-input>
          </div>
          <div class="credit-form mt-3">
              <div style="display:inline-block; font-size:12px;"><strong>Enter Agent's PIN</strong> </div>
              <b-form-input id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-input>
          </div>
          <div class="credit-form mt-3">
              <div style="display:inline-block; font-size:12px;"><strong>Description</strong> </div>
              <b-form-textarea id="input-none" class="w-100 mt-1" size="sm" :state="null" placeholder="No validation"></b-form-textarea>
          </div>
                <b-button size="md" variant="success" class="px-5 mt-2" @click="show(['loanBoard', 200000])"> Submit </b-button> 
      </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.withdraw {
     border: 1px solid #2196F3;
     height: 85vh;
    padding-bottom: 100px;
    left: 10rem;
    right:0;
    margin: 30px 10px 0px 10px;
    position: fixed;
    overflow-y: hidden;
}
  .dashboard-transfer {
      width: 100%;
      display: flex;
      
  }
  .dashboard-main {
    overflow-y: hidden !important;
    background: white;
    width: 100%;
    margin: 30px 40px 40px 40px;
    border: 1px solid #34323222;
  }
 
</style>