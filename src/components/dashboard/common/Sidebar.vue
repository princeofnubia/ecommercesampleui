<template>
    <div class="sidebar">
        <div class="sidebar-list" @click="changeComponent('dashboard')">
           <font-awesome-icon icon="th-large" class="fa-1x"/> Dashboard
        </div>
        <div class="sidebar-list" @click="changeComponent('customer')">
          <font-awesome-icon icon="users" class="fa-1x"/>  Customers
        </div>
        <div class="sidebar-list" @click="changeComponent('saving')">
          <font-awesome-icon icon="piggy-bank" class="fa-1x"/>  Savings
        </div>
        <div class="sidebar-list" @click="changeComponent('loan')">
          <font-awesome-icon icon="money-bill-alt" class="fa-1x"/>  Loans
        </div>
        <div class="sidebar-list" @click="changeComponent('transfer')">
          <font-awesome-icon icon="exchange-alt" class="fa-1x"/>  Transfers
        </div>
        <div class="sidebar-list" @click="changeComponent('withdrawal')">
           <font-awesome-icon icon="coins" class="fa-1x"/> Withdrawal
        </div>
        <div class="sidebar-list" @click="changeComponent('transaction')">
          <font-awesome-icon icon="hand-holding-usd" class="fa-1x"/>  Transactions
        </div>
        <div class="sidebar-list" @click="changeComponent('setting')">
          <font-awesome-icon icon="cog" class="fa-1x"/>  Settings
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        changeComponent (val) {
            this.$root.$emit("changeDashboardComponent", val)
        }
    }
}
</script>
<style scoped>
  .sidebar {
      overflow-y: hidden !important;
    background: white;
    bottom: 0;
    top: 2rem;
    width: 12%;
    position: fixed;
    -webkit-box-shadow: 1px 1px 9px 1px #adadad45;
    box-shadow: 1px 1px 9px 1px #adadad45;
    padding: 10px 0px 0px 0px;
    margin-top: 30px;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
  .sidebar-list {
      overflow-y: hidden;
          padding: 0.7rem 0.7rem;
      cursor: pointer;
  }
  .sidebar-list:hover{
      background: rgb(55, 140, 252);
      color: white;
      padding: 0.7rem 0.7rem;
  }
</style>