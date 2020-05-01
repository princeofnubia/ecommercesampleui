<template>
    <div class="admin-customer">
       <div class="dashboard-main customer-main">
            <div class="customer-widget mt-1">
                <div class="d-flex justify-content-between">
                <b-button size="lg" variant="primary" class="mx-1"> New Savings Cycle </b-button>
                </div>
            </div>
            <div class="customer-search mt-4 mx-1">
                <customer-search />
            </div>
            <div class="customer-list mt-4 mx-1">
                <b-card>
                          <template v-slot:header>
        <div class="d-flex justify-content-between">                      
        <h5 class="">Savings Cycle</h5>
        <div class="d-flex justify-content-between w-50">
 <div style="width:30%">
    <div class="mx-2"> Status </div>
    <b-dropdown split size="sm" id="dropdown-1" variant="light" text="All" class="w-100">
    <b-dropdown-item>All</b-dropdown-item>
  </b-dropdown>
    </div>
     <div style="width:30%">
    <div> Status </div>
    <b-dropdown split size="sm" id="dropdown-1" style="text-align:start" variant="light" text="All" class="w-100">
    <b-dropdown-item>All</b-dropdown-item>
  </b-dropdown>
    </div>

    <div class="m-md-2">
    <div>End Date</div>
       <b-form-datepicker size="sm" style="height:30px !important"></b-form-datepicker>
    </div>

        </div>
        </div>
      </template>
                <customer-list />
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
import customerList from "./widget/CustomerList"
import customerSearch from "./widget/CustomerSearch"
export default {
    components: {
        customerList,
        customerSearch
    }
}
</script>
<style scoped>
  .admin-customer {
      display: flex;
      
  }
 .customer-main {
    width: 87%;
  }
  .customer-side {
    height: 100vh;
    overflow-x: hidden !important;
    width: 20%;
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