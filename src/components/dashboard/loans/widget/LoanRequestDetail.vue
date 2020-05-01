<template>
  <div class="admin-loan-request admin-customer-list loan-request-detail">
    <b-button size="lg" variant="primary" class="m-5" @click="show('loanRequest')"> <b-icon icon="arrow-left" />Go back </b-button> 
      <div class=" d-flex justify-content-around" >
       <customer-profile style="width:40%;"/>
      <b-card no-body class="overflow-hidden" style="width: 540px; height:300px">
      <b-row no-gutters>
      <b-col md="12">
        <b-card-body title="Loan for December Business">
          <b-card-text>
            Amount: NGN 55,000
            <br />
            Repayment Start Date: 25/02/2020
             <br />
            Unit Contribution: 1,000 Naira
             <br />
            Frequency: Daily
          </b-card-text>
          <b-button class="mx-2 float-right" size="md"  variant="success" @click="rejectLoan"><b-icon icon="check" /> Approve Loan </b-button>
          <b-button class="mx-2 float-right" size="md"  variant="danger" @click="approveLoan"><b-icon icon="x" /> Reject Loan </b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
      </div>
                  <div class="loan-button m-4">
                <b-button class="mx-2" size="md"  :variant="activeDebtor" @click="showSavingsHistory"> Savings History </b-button>
                <b-button class="mx-2" size="md" :variant="activeRepayment" @click="showRepaymentHistory"> Repayment History </b-button>
                </div>
                <component :is="selectedComponent" class="m-4" />
  </div>
</template>

<script>
import customerProfile from "./CustomerProfile"
import savingsHistory from "./CustomerSavingsHistory"
import repaymentHistory from "./CustomerRepaymentHistory"
export default {
    components: {
        customerProfile,
        savingsHistory,
        repaymentHistory
    },
    data () {
        return {
          selectedComponent: savingsHistory,
          activeRepayment: "primary",
          activeDebtor: "outline-primary"
        }
    },
        methods: {
        showSavingsHistory () {
            this.selectedComponent = savingsHistory
            this.activeRepayment= "outline-primary"
            this.activeDebtor= "primary"
        },
        showRepaymentHistory () {
            this.selectedComponent = repaymentHistory
            this.activeRepayment= "primary"
            this.activeDebtor= "outline-primary"
        },
        rejectLoan () {

        },
        approveLoan () {
            
        },
        show(val) {
            this.$root.$emit("show", val)
        }
    }
}
</script>

<style>

</style>