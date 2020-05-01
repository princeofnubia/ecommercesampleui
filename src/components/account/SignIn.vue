<template>
  <div class="verify-account">
       <b-card class="p-5" style="height: 90%">
         <h2>PIN</h2>
    <b-card-text>
     Select your PIN and confirm. Your PIN is your security
access to your account.
    </b-card-text>

    <div class="d-flex justify-content-between w-100">
            <b-form-group
        id="input-group-1"
        label="Phone Number"
        class="w-100"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="X0000000000"
        ></b-form-input>
      </b-form-group>
       </div>
    <b-card-text class="mt-3">Confirm PIN</b-card-text>
    <div class="d-flex justify-content-between w-100">
      <input class="otp-input mx-1" type="numeric" maxlength="1" v-for="i in 7" :key="i" contenteditable="" placeholder="-">
    </div>
   <b-button class="my-5 alajo-btn" @click="gotoDashboard" variant="primary" size="sm">Submit</b-button>
  </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
        gotoDashboard () {
            this.$router.push("dashboard")
        },
      onSubmit(evt) {
        this.$root.$emit("changeComponent","confirmPin")
        evt.preventDefault()
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
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