<template>
  <div class="d-flex justify-contentent-between">
      <operating-account class="mx-1"/>
      <total-loan-possible class="mx-1"/>
  </div>
</template>

<script>
import operatingAccount from "./OperatingAccount";
import totalLoanPossible from "./TotalLoanPossible";
export default {
    components: {
        operatingAccount,
        totalLoanPossible
    }
}
</script>

<style>

</style>