<template>
<div class="loan-dashboard">
    
    <component :is="component" />
</div>
</template>

<script>
import loanBoard from "./widget/LoanBoard"
import requestCredit from "./widget/RequestCredit"
import loanRequest from "./widget/LoanRequest"
import loanRequestDetail from "./widget/LoanRequestDetail"
export default {
    components: {
        loanBoard,
        loanRequest,
        loanRequestDetail,
        requestCredit
    },
    data () {
        return {
            component: loanBoard,
            credit: 0
        }
    },
    created () {
        this.$root.$on("show", (val) => {
            if(Array.isArray(val)) {
                this.component = val[0]
            } else {
               this.component = val  
            }
           
        })
    }
}
</script>

<style>

</style>