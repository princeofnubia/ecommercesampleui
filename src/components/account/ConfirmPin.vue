<template>
  <div class="verify-account">
       <b-card class="p-5" style="height: 90%">
         <h2>PIN</h2>
    <b-card-text>
      Select your PIN and confirm. Your PIN is your security access to your account.
    </b-card-text>

    <b-card-text class="mt-5">PIN</b-card-text>
    <div class="d-flex justify-content-between w-100">
      <input class="otp-input mx-1" type="numeric" maxlength="1" v-for="i in 7" :key="i" contenteditable="" placeholder="-">
    </div>
    <b-card-text class="mt-5">Confirm PIN</b-card-text>
    <div class="d-flex justify-content-between w-100">
      <input class="otp-input mx-1" type="numeric" maxlength="1" v-for="i in 7" :key="i" contenteditable="" placeholder="-">
    </div>
    <b-button class="my-5 alajo-btn" type="submit" @click="gotoDashboard" variant="primary" size="sm">Submit</b-button>
  </b-card>
  </div>
</template>

<script>
export default {
    methods: {
        gotoDashboard () {
            this.$router.push("dashboard")
        }
    }
}
</script>

<style>
 .verify-account {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    justify-content: center;
  }
  .otp-input {
        border: 1px solid #a9a9a9;
    width: 20%;
    height: 70px;
        text-align: center;
    font-size: 30px;
    font-weight: 700;
    border-radius: 0.4rem;
  }
</style>