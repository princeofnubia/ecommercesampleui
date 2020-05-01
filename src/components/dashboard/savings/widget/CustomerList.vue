<template>
    <div class="admin-customer-list">
        <div class="top-rep d-flex justify-content-between">
            <b-form-input size="lg" class="mt-2" placeholder="search by name or phone number" style="width:40%" />
            <span  style="width:18%;">
                <label for="input-1" style="margin: 0rem">Status</label>
                <b-form-select size="sm" id="input-1" placeholder="search by name or phone number" />
            </span>
            <span  style="width:18%;">
                <label for="input-2" style="margin: 0rem">Status</label>
                <b-form-select size="sm" id="input-2" placeholder="search by name or phone number" />
            </span>
            <span  style="width:18%;">
                <label for="input-3" style="margin: 0rem">End Date</label>
                <b-form-select size="sm" id="input-3" placeholder="search by name or phone number" />
            </span>
        </div>
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between" style="border:none">
                <div style="width:20%">
                   <strong style="font-size:11px"> CYCLE NAME </strong>

                </div>
                <div style="width:10%">
                   <strong style="font-size:11px"> AMOUNT </strong>
                </div>
                <div style="width:10%">
                   <strong style="font-size:11px"> FREQUENCY </strong>
                </div>
                <div style="width:18%">
                   <strong style="font-size:11px"> PHONE NUMBER </strong>
                </div>
                <div style="width:20%">
                   <strong style="font-size:11px"> NAME OF SAVER </strong>
                </div>
                <div style="width:15%">
                    <strong style="font-size:11px"> END DATE </strong>
                </div>
                <div style="width:7%">
                    <strong style="font-size:11px"> </strong>
                </div>
            </b-list-group-item>
        </b-list-group>
        <b-list-group>
            <b-list-group-item v-for="(it, index) in item" :key="index" class="c-list my-1 py-3 d-flex justify-content-between">
                <div style="width:20%">
                    {{ it.userPic }}
                </div>
                <div style="width:10%">
                    {{ it.amount }} 
                </div>
                <div style="width:10%">
                   {{it.frequency}}
                </div>
                <div style="width:18%">
                    {{it.name}}
                </div>
                <div style="width:20%">
                    {{ it.phoneNumber}}
                </div>
                <div style="width:15%">
                    {{ it.endDate }}
                </div>
                <div style="width:7%">
                    <b-link class="text-info"> VIEW </b-link>
                </div>
            </b-list-group-item>
             <b-button variant="outline-secondary" class="my-2 w-25 text-primary d-flex align-self-center justify-content-center"> View All </b-button>
        </b-list-group>
    </div>
</template>
<script>
export default {
    data () {
        return {
            item: [
                { userPic:"Savings for farming", amount: "5000", frequency: "daily", endDate:"03-03-90", phoneNumber: "09044343432", name: "Adebayo salami", creditScore: "45", email: "salami90@gmail.com"},
                { userPic:"Savings for farming", amount: "5000", frequency: "daily", endDate:"03-03-90", phoneNumber: "09044343432", name: "Mustapha Bawa", creditScore: "45", email: "bawaPro@gmail.com"},
                { userPic:"Savings for farming", amount: "5000", frequency: "daily", endDate:"03-03-90", phoneNumber: "09044343432", name: "John Okoye", creditScore: "45", email: "okoy7893@gmail.com"},
                { userPic:"Savings for farming", amount: "5000", frequency: "daily", endDate:"03-03-90", phoneNumber: "09044343432", name: "Adegbile daniel", creditScore: "45", email: "gbigbi@gmail.com"},
                { userPic:"Savings for farming", amount: "5000", frequency: "daily", endDate:"03-03-90", phoneNumber: "09044343432", name: "Macido John", creditScore: "45", email: "majohn32@gmail.com"},
                { userPic:"Savings for farming", amount: "5000", frequency: "daily", endDate:"03-03-90", phoneNumber: "09044343432", name: "Suzan iyiola", creditScore: "45", email: "suzzysuzzy@gmail.com"},
                { userPic:"Savings for farming", amount: "5000", frequency: "daily", endDate:"03-03-90", phoneNumber: "09044343432", name: "David adeleke", creditScore: "45", email: "davido@gmail.com"},
                { userPic:"Savings for farming", amount: "5000", frequency: "daily", endDate:"03-03-90", phoneNumber: "09044343432", name: "Kamil Kamil", creditScore: "45", email: "kamilsq2@gmail.com"},
                { userPic:"Savings for farming", amount: "5000", frequency: "daily", endDate:"03-03-90", phoneNumber: "09044343432", name: "Mo Salah", creditScore: "45", email: "mosalah@gmail.com"},
                { userPic:"Savings for farming", amount: "5000", frequency: "daily", endDate:"03-03-90", phoneNumber: "09044343432", name: "Sukura Arewa", creditScore: "45", email: "suku89@gmail.com"},
            ]
        }
    }
}
</script>
<style scoped>
.c-list {
    border: 2px solid #2196F3;
    border-radius: 10px;
    box-shadow: -1px 0px 6px 1px #e8e8e8;
}

</style>