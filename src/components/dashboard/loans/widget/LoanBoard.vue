<template>
    <div class="admin-customer">
       <div class="dashboard-main">
            <div class="customer-widget mt-1">
                <div class="d-flex justify-content-between">
                </div>
            </div>
            <div class=" mt-4 mx-1">
                <loan-out />
            </div>
            <div class=" mt-4 mx-1">
                <loan-info />
                <div class="loan-button mt-2">
                <b-button class="mx-2" size="lg"  :variant="activeDebtor" @click="showDebtor"> Debtors </b-button>
                <b-button class="mx-2" size="lg" :variant="activeRepayment" @click="showRepayment"> Repayments </b-button>
                </div>
            </div>
            <div class="customer-list mt-4 mx-1">
                <b-card>
                    <keep-alive>
                <component :is="currentComponent"/>
                    </keep-alive>
                </b-card>
            </div>
        </div>
        <div class="customer-side pt-4 px-2">
            <cycle-request />
        </div>
    </div>
</template>
<script>
import cycleRequest from "./CycleRequest"
import repaymentList from "./RepaymentList"
import loanOut from "./LoanOut"
import debtorsList from "./DebtorsList"
import loanInfo from "./LoanInfo"
export default {
    data () {
        return {
          currentComponent: repaymentList,
          activeRepayment: "primary",
          activeDebtor: "outline-primary"
        }
    },
    components: {
        cycleRequest,
        repaymentList,
        debtorsList,
        loanOut,
        loanInfo
    },
    methods: {
        showDebtor () {
            this.currentComponent = debtorsList
            this.activeRepayment= "outline-primary"
            this.activeDebtor= "primary"
        },
        showRepayment () {
            this.currentComponent = repaymentList
            this.activeRepayment= "primary"
            this.activeDebtor= "outline-primary"
        }
    }
}
</script>
<style>
  .admin-customer {
      display: flex;
     
      
  }
 .customer-main {
    overflow-y: auto;
    width: 70%;
    left: 10rem;
    margin: 30px 10px 0px 10px;
    position: fixed;
  }
  .customer-side {
    height: 100vh;
    overflow-x: hidden !important;
    width: 17%;
    position: fixed;
    right:0;
    box-shadow: 1px 1px 9px 1px #adadad45;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
  .customer-widget {
      display: flex;
      flex-direction: row-reverse;
  }
  .card-header {
    padding: 1rem 1.25rem;
    margin-bottom: 0;
        background: #fff;
    border-color:  #2196F3;
}
  .card {
    margin-bottom: 0;
    border: 1px solid #2196F3;
}
</style>