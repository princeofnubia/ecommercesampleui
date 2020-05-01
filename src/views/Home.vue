<template>
  <keep-alive>
      <component :is="component" />
  </keep-alive>
</template>

<script>
import confirmPin from "../components/account/ConfirmPin"
import createAccount from "../components/account/CreateAccount"
import signIn from "../components/account/SignIn"
import verifyAccount from "../components/account/VerifyAccount"
export default {
    data () {
        return {    
          component: createAccount
        }
    },
    components: {
        confirmPin,
        createAccount,
        signIn,
        verifyAccount
    },
    created () {
      this.$root.$on("changeComponent", (comp) => {
        this.component = `${comp}`
      })
    }
 }
</script>

<style>

</style>