<template>
    <div class="admin-loan-request admin-customer-list m-5">
        <b-button size="lg" variant="primary" class="mx-2" @click="show('loanBoard')"> <b-icon icon="arrow-left" />Go back </b-button>
        <b-button size="lg" variant="primary" class="mx-2 float-right"> + New Loan </b-button>
        <div />
        <div class="top-rep d-flex justify-content-between m-2 mt-5">
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
        <b-list-group class="m-2">
            <b-list-group-item class="d-flex justify-content-between" style="border:none">
                <div style="width:10%">
                </div>
                <div style="width:20%">
                   <strong style="font-size:11px"> PHONE NUMBER </strong>
                </div>
                <div style="width:25%">
                   <strong style="font-size:11px"> NAME </strong>
                </div>
                <div style="width:30%">
                   <strong style="font-size:11px"> EMAIL </strong>
                </div>
                <div style="width:15%">
                   <strong style="font-size:11px"> AMOUNT </strong>
                </div>
                <div style="width:20%">
                   <strong style="font-size:11px"> DUE DATE </strong>
                </div>
                <div style="width:7%">
                </div>
            </b-list-group-item>
        </b-list-group>
        <b-list-group class="m-2">
            <b-list-group-item v-for="(it, index) in item" :key="index" class="c-list my-1 py-3 d-flex justify-content-between">
                <div style="width:10%">
                    <b-avatar variant="info" :src="it.userPic" size="2rem"></b-avatar>
                </div>
                <div style="width:20%">
                    {{it.phoneNumber}}
                </div>
                <div style="width:25%">
                   {{it.name}}
                </div>
                <div style="width:30%">
                    {{it.email}}
                </div>
                <div style="width:15%">
                    {{20000}}
                </div>
                <div style="width:20%">
                    {{it.dueDate}}
                </div>
                <div style="width:7%">
                    <b-link class="text-info" @click="show('loanRequestDetail')"> VIEW </b-link>
                </div>
            </b-list-group-item>
     <b-button variant="outline-secondary" class="my-2 w-25 text-primary d-flex align-self-center justify-content-center" @click="addMore"> View All </b-button>
        </b-list-group>
    </div>
</template>
<script>
export default {
    data () {
        return {
            item: [
                { userPic:"https://placekitten.com/234/300", phoneNumber: "09024323112", name: "Adebayo salami", dueDate: "30-11-90", email: "salami90@gmail.com"},
                { userPic:"https://placekitten.com/235/300", phoneNumber: "08020221112", name: "Mustapha Bawa", dueDate: "30-11-90", email: "bawaPro@gmail.com"},
                { userPic:"https://placekitten.com/236/300", phoneNumber: "07024322322", name: "John Okoye", dueDate: "30-11-90", email: "okoy7893@gmail.com"},
                { userPic:"https://placekitten.com/237/300", phoneNumber: "03022321122", name: "Adegbile daniel", dueDate: "30-11-90", email: "gbigbi@gmail.com"},
                { userPic:"https://placekitten.com/238/300", phoneNumber: "08124322322", name: "Macido John", dueDate: "30-11-90", email: "majohn32@gmail.com"},
                { userPic:"https://placekitten.com/239/300", phoneNumber: "02024328382", name: "Suzan iyiola", dueDate: "30-11-90", email: "suzzysuzzy@gmail.com"},
                { userPic:"https://placekitten.com/240/300", phoneNumber: "04024323323", name: "David adeleke", dueDate: "30-11-90", email: "davido@gmail.com"},
                { userPic:"https://placekitten.com/241/300", phoneNumber: "05024321122", name: "Kamil Kamil", dueDate: "30-11-90", email: "kamilsq2@gmail.com"},
                { userPic:"https://placekitten.com/242/300", phoneNumber: "05024545823", name: "Mo Salah", dueDate: "30-11-90", email: "mosalah@gmail.com"},
                { userPic:"https://placekitten.com/243/300", phoneNumber: "03024232822", name: "Sukura Arewa", dueDate: "30-11-90", email: "suku89@gmail.com"},
            ]
        }
    },
    methods: {
        addMore () {
            let v = Math.round(Math.random() * 10); 
            const val = this.item[v]
            this.item.push(val)
        },
        show(val) {
            this.$root.$emit("show", val)
        }
    }
}
</script>
<style>
.admin-loan-request {
    height: 100vh;
    padding-bottom: 100px;
    overflow-y: auto !important;
    left: 10rem;
    right:0;
    margin: 30px 10px 0px 10px;
    position: fixed;
}
.c-list {
    border: 2px solid #2196F3;
    border-radius: 10px;
    box-shadow: -1px 0px 6px 1px #e8e8e8;
}

</style>