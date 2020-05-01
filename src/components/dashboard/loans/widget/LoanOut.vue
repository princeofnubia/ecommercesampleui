<template>
    <div class="loan-out">
      <div class="loan-top d-flex flex-column">
        <div class="d-flex justify-content-center mt-2"><h6> <strong> Loan Out </strong> </h6></div>
        <div class="d-flex justify-content-center">  NGN<h2 style="display:inline; vertical-align:middle">350,000.25</h2> </div>
      </div>
      <div class="loan-bottom d-flex justify-content-around py-2">
        <div class="loan-bottom-first ">
          <h6><strong>Total Loans Out</strong></h6>
          <h6 class="d-flex justify-content-center"><strong>20</strong></h6>
        </div>
        <div class="loan-bottom-second">
          <h6><strong>Total Loans Out</strong></h6>
          <h6 class="d-flex justify-content-center"><strong>12</strong></h6>
        </div>
        <div class="loan-bottom-third">
          <h6><strong>Total Loans Out</strong></h6>
          <h6 class="d-flex justify-content-center"><strong>2</strong></h6>
        </div>
      </div>
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
<style scoped>
.loan-out {
  width: 100%;
  border: 1px solid #2196F3;
  border-radius: 10px;
}
.loan-bottom{
  border-top-right-radius: 10px;
  border-top: 1px solid #2196F3;
  background-color: #f7f7f7;
}
</style>