<template>
  <div class="create-account mx-5 w-75">
      <div class="create-account-logo">
          <img src="../../assets/alajo.png" />
      </div>
      <div class="create-account-main w-100">
      <div class="create-account-main-left-pane w-50">
          <create-account-form class="w-100" />
      </div> 
      <div class="create-account-main-right-pane w-50">
          <img src="../../assets/banner.png" />
      </div>
      </div>
  </div>
</template>

<script>
import createAccountForm from "./createAccount/CreateAccount"
export default {
    components: {
        createAccountForm
    }
}
</script>

<style>
.create-account {
    height: 100vh;
    display: flex;
    align-items: center;
     overflow: hidden;
}
.create-account-logo {
    position: fixed;
    top:5rem;
    left: 10rem;
}
 .create-account-main {
     display: flex;
     justify-content: space-between;
 }
 .create-account-main-left-pane {
   display: flex;
     align-items: center;
 }
 .create-account-main-right-pane {
     display: flex;
     justify-content: center;
     align-items: center;
 }
</style>