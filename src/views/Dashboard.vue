<template>
     <div class="dash w-100">
      <nav-comp />
      <div class="d-flex justify-content-between">
        <sidebar /> 
        <keep-alive>
        <component :is="component" class="main" />
        </keep-alive>
      </div>
     </div>
</template>

<script>
import navComp from "../components/dashboard/common/Nav"
import sidebar from "../components/dashboard/common/Sidebar"
import dashboard from "../components/dashboard/dashboard/Dashboard"
import customer from "../components/dashboard/customers/Customers"
import loan from "../components/dashboard/loans/Loans"
import saving from "../components/dashboard/savings/Savings"
import setting from "../components/dashboard/settings/Settings"
import transaction from "../components/dashboard/transactions/Transactions"
import transfer from "../components/dashboard/transfers/Transfers"
import withdrawal from "../components/dashboard/withdrawal/Withdrawal"
export default {
    data () {
        return {    
          component: dashboard
        }
    },
    components: {
        sidebar,
        navComp,
        dashboard,
        customer,
        loan,
        saving,
        setting,
        transaction,
        transfer,
        withdrawal
    },
    created () {
      this.$root.$on("changeDashboardComponent", (comp) => {
        this.component = `${comp}`
      })
    }
 }
</script>

<style>
 .dash {
         overflow-y: hidden !important;
 }
 .main {
       width: 100%;
    right: 0;
 }
</style>