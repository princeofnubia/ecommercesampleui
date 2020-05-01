<template>
    <div class="admin-loan-request admin-customer-list loan-request-detail">
        <div class="w-100">
                <div class="loan-button mt-1">
                <b-button class="mx-2" size="md"  :variant="activePhone" @click="showPhone"> To Phone Number </b-button>
                <b-button class="mx-2" size="md" :variant="activeBank" @click="showBank"> To Bank Account </b-button>
                </div>
            
            <div class="customer-list w-50 mt-3 mx-1">
                <b-card>
                    <keep-alive>
                <component :is="currentComponent"/>
                    </keep-alive>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script> 
import transferPhone from "./TransferPhone"
import transferBank from "./TransferBank"
export default {
    data () {
        return {
          currentComponent: transferPhone,
          activeBank: "primary",
          activePhone: "outline-primary"
        }
    },
    components: {
        transferPhone,
        transferBank,
    },
    methods: {
        showPhone () {
            this.currentComponent = transferPhone
            this.activeBank= "outline-primary"
            this.activePhone= "primary"
        },
        showBank () {
            this.currentComponent = transferBank
            this.activeBank= "primary"
            this.activePhone= "outline-primary"
        }
    }
}
</script>
<style scoped>
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
  .dashboard-side {
    height: 100vh;
    overflow-x: hidden !important;
    width: 20%;
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