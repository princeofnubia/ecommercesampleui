<template>
    <div class="admin-customer">
       <div class="dashboard-main">
            <div class="customer-widget mt-1">
                <div class="d-flex justify-content-between">
                <b-button size="lg" variant="info" class="mx-1"> Update User Account </b-button>
                <b-button size="lg" variant="primary" class="mx-1"> Add New User </b-button>
                </div>
            </div>
            <div class="customer-search mt-4 mx-1">
                <customer-search />
            </div>
            <div class="customer-list mt-4 mx-1">
                <b-card>
                          <template v-slot:header>
        <div class="d-flex justify-content-between">                      
        <h5 class="">Customers</h5>
        <b-button variant="outline-secondary" class="mx-1 text-primary"> Export as CSV </b-button>
        </div>
      </template>
                <customer-list />
                </b-card>
            </div>
        </div>
        <div class="customer-side dashboard-side pt-4 px-2">
            <cycle-request />
        </div>
    </div>
</template>
<script>
import cycleRequest from "./widget/CycleRequest"
import customerList from "./widget/CustomerList"
import customerSearch from "./widget/CustomerSearch"
export default {
    components: {
        cycleRequest,
        customerList,
        customerSearch
    }
}
</script>
<style>
  .admin-customer {
      display: flex;
      
  }
 .customer-main {
    overflow-y: auto !important;
    width: 68%;
    left: 10rem;
    margin: 30px 10px 0px 10px;
    position: fixed;
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