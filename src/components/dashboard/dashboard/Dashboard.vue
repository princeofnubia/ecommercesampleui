<template>
    <div class="dashboard">
        <div class="dashboard-main">
        <div class="dashboard-widget">
            <operating-account-widget />
            <wallet-balance />
            <commission />
        </div>
        <div class="dashboard-info">
            <info />
        </div>
        <div class="dashboard-graph mt-2">
            <dashboard-graph />
        </div>
        </div>
        <div class="dashboard-side">
            <dashboard-side />
        </div>
    </div>
</template>
<script>
import operatingAccountWidget from "./widget/OperatingAccount"
import walletBalance from "./widget/WalletBalance"
import commission from "./widget/Commission"
import info from "./widget/info"
import dashboardSide from "./DashboardSide"
import dashboardGraph from "./DashboardGraph"
export default {    
    components: {
        operatingAccountWidget,
        walletBalance,
        commission,
        info,
        dashboardSide,
        dashboardGraph
    }
}
</script>
<style>
  .dashboard {
      display: flex;
      
  }
  .dashboard-main {
    height: 100vh;
    padding-bottom: 100px;
    overflow-y: auto !important;
    width: 69%;
    left: 10rem;
    margin: 30px 10px 0px 10px;
    position: fixed;
  }
  .dashboard-side {
    height: 100vh;
    overflow-x: auto !important;
    width: 17%;
    position: fixed;
    right:0;
    box-shadow: 1px 1px 9px 1px #adadad45;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
  .dashboard-widget {
      display: flex;
      justify-content: space-between;
  }
  .widget {
        border: 1px solid #2196F3;
    height: 8.5rem;
    border-radius: 0.6rem;
    width: 33%;
       box-shadow: 1px 1px 2px 1px #ecececc7;
}
</style>