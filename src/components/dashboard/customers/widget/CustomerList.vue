<template>
    <div class="admin-customer-list">
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between" style="border:none">
                <div style="width:10%">
                </div>
                <div style="width:20%">
                   <strong style="font-size:11px"> PHONE NUMBER </strong>
                </div>
                <div style="width:25%">
                   <strong style="font-size:11px"> NAME </strong>
                </div>
                <div style="width:23%">
                   <strong style="font-size:11px"> EMAIL </strong>
                </div>
                <div style="width:15%">
                   <strong style="font-size:11px"> CREDIT SCORE </strong>
                </div>
                <div style="width:7%">
                </div>
            </b-list-group-item>
        </b-list-group>
        <b-list-group>
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
                <div style="width:23%">
                    {{it.email}}
                </div>
                <div style="width:15%">
                    {{it.creditScore}}
                </div>
                <div style="width:7%">
                    <b-link class="text-info"> VIEW </b-link>
                </div>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>
<script>
export default {
    data () {
        return {
            item: [
                { userPic:"https://placekitten.com/234/300", phoneNumber: "09024323112", name: "Adebayo salami", creditScore: "45", email: "salami90@gmail.com"},
                { userPic:"https://placekitten.com/235/300", phoneNumber: "08020221112", name: "Mustapha Bawa", creditScore: "45", email: "bawaPro@gmail.com"},
                { userPic:"https://placekitten.com/236/300", phoneNumber: "07024322322", name: "John Okoye", creditScore: "45", email: "okoy7893@gmail.com"},
                { userPic:"https://placekitten.com/237/300", phoneNumber: "03022321122", name: "Adegbile daniel", creditScore: "45", email: "gbigbi@gmail.com"},
                { userPic:"https://placekitten.com/238/300", phoneNumber: "08124322322", name: "Macido John", creditScore: "45", email: "majohn32@gmail.com"},
                { userPic:"https://placekitten.com/239/300", phoneNumber: "02024328382", name: "Suzan iyiola", creditScore: "45", email: "suzzysuzzy@gmail.com"},
                { userPic:"https://placekitten.com/240/300", phoneNumber: "04024323323", name: "David adeleke", creditScore: "45", email: "davido@gmail.com"},
                { userPic:"https://placekitten.com/241/300", phoneNumber: "05024321122", name: "Kamil Kamil", creditScore: "45", email: "kamilsq2@gmail.com"},
                { userPic:"https://placekitten.com/242/300", phoneNumber: "05024545823", name: "Mo Salah", creditScore: "45", email: "mosalah@gmail.com"},
                { userPic:"https://placekitten.com/243/300", phoneNumber: "03024232822", name: "Sukura Arewa", creditScore: "45", email: "suku89@gmail.com"},
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