<template>
    <div class="admin-customer-cycleRequest">
        <h6 style="font-weight:900; font-size:18px"> New Savings Cycle Request </h6>
                <b-list-group>
            <b-list-group-item v-for="(it, index) in item" :key="index" class="request-list my-2 mx-1 d-flex flex-column">
                <div>
                    <strong style="font-size:13px"> Savings for december rent </strong>
                </div>
                <div class="d-flex justify-content-between">
                    <strong style="font-size:13px"> {{it.amount}}</strong>
                    <strong style="font-size:13px"> {{it.frequency}}</strong>
                    <b-link class="text-info"> VIEW </b-link>
                </div>
                <div style="width:15%">
                   <strong style="font-size:13px"> {{it.phoneNumber}} </strong>
                </div>
            </b-list-group-item>
            <b-button variant="outline-secondary" class="mb-5 w-75 text-primary d-flex align-self-center justify-content-center"> View All </b-button>
        </b-list-group>
    </div>
</template>
<script>
export default {
    data () {
        return {
            item: [
                { amount:"500", phoneNumber: "09024323112", name: "Adebayo salami", frequency: "daily", email: "salami90@gmail.com"},
                { amount:"500", phoneNumber: "08020221112", name: "Mustapha Bawa", frequency: "daily", email: "bawaPro@gmail.com"},
                { amount:"500", phoneNumber: "07024322322", name: "John Okoye", frequency: "daily", email: "okoy7893@gmail.com"},
                { amount:"500", phoneNumber: "03022321122", name: "Adegbile daniel", frequency: "daily", email: "gbigbi@gmail.com"},
            ]
        }
    }
}
</script>
<style scoped>
.request-list {
    border-radius: 10px;
    box-shadow: 1px 1px 6px 1px #d4d4d4;
}
.admin-customer-cycleRequest {
    height: 90vh;
    overflow-y: auto;
}
</style>