<template>
  <div>
      <div class="create-account-caption w-75 my-3">
    <h3>  Let’s create your account.</h3>
<small style="display:block; line-height:initial">Signing up for Alajo is fast and free — no commitments or long-term contracts.</small>

    </div>
        <small style="display:block; line-height:initial">Have an account? <b-link @click="signIn"> Sign in </b-link></small>
    <b-form class="my-2 w-75" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Name"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Please enter your full name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Phone number" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="0XXXXXXXXXX"
        ></b-form-input>
        <small>You’ll get an SMS with one-time access code. </small>
      </b-form-group>

     <small>By clicking Enter, you agree to our <b-link to="termsofuse">Terms of Use</b-link></small>
      <b-button class="ml-3 alajo-btn" type="submit" variant="primary" size="sm">Submit</b-button>
    </b-form>
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
      onSubmit(evt) {
        this.$root.$emit("changeComponent","verifyAccount")
        evt.preventDefault()
      },
      signIn () {
        this.$root.$emit("changeComponent","signIn")
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