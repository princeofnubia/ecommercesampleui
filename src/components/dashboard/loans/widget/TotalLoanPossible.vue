<template>
  <div class="total-loan-possible">
      <div class="loan-top d-flex flex-column mt-3">
        <div class="d-flex justify-content-center mt-2"><h6> <strong> Loan Out </strong> </h6></div>
        <div class="d-flex justify-content-center bold">  NGN<h2 style="display:inline; vertical-align:middle">350,000.25</h2> </div>
        <div class="d-flex justify-content-center bold">  Extra credit: NGN {{ getCredit > 0 ? getCredit : 0 }} </div> 
        <div class="d-flex justify-content-center bold mt-2">
          <b-button size="md" :variant="getCredit > 0 ? 'danger': 'success'" @click="getCredit > 0 ? returnCredit() :show('requestCredit')"> {{ getCredit > 0 ? "Return credit" : "Request credit" }} </b-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
   data () {
     return {
       credit: 0
     }
   },
   computed: {
     getCredit () {
       return this.$store.getters.getCredit
     }
   },
    methods: {
        show(val) {
            this.$root.$emit("show", val)
        },
        returnCredit () {
          this.$store.commit("setCredit", 0)
        }
    },
    created () {
    }
}
</script>

<style scoped>
.total-loan-possible {
  width: 98%;
  border: 1px solid #2196F3;
  border-radius: 10px;
}
.loan-bottom{
  border-top-right-radius: 10px;
  border-top: 1px solid #2196F3;
  background-color: #f7f7f7;
}
.bold {
    font-weight: bolder;
}
</style>