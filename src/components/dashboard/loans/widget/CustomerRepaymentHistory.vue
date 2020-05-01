<template>
  <div class="repayment-history m-4 d-flex justify-content-between">
      <div class="loan-card pl-2 pr-2 py-3">
          <div class="d-flex justify-content-between">
              <small style="width: 101%"><b> Loan for January Business </b></small>
              <small class="float-right" style="line-height: normal; margin-right:-20px"> <b>N500</b> daily</small>
          </div>
          <div class="d-flex justify-content-between mt-1">
              <small><b> CYCLE: 20 WEEKS </b></small>
              <small ><b-badge class="px-3 py-1">completed</b-badge> </small>
          </div>
          <div class="record-line mt-2" />
          <div class="d-flex justify-content-between mt-1">
              <small> Start Date: 20/2/2020 </small>
              <small>End Date: 25/ 10/2020 </small>
          </div>
          <div class="record mt-3">
          <b-icon icon="check-circle" v-for="i in filled" :key="i" class="box h3 m-1" />
          <b-icon icon="circle" v-for="i in unfilled" :key="i" class="box h3 m-1" />
          </div>
      </div>
      <div class="loan-card pl-2 pr-2 py-3">
          <div class="d-flex justify-content-between">
              <small style="width: 101%"><b> Loan for January Business </b></small>
              <small class="float-right" style="line-height: normal; margin-right:-20px"> <b>N500</b> daily</small>
          </div>
          <div class="d-flex justify-content-between mt-1">
              <small><b> CYCLE: 20 WEEKS </b></small>
              <small ><b-badge class="px-3 py-1">completed</b-badge> </small>
          </div>
          <div class="record-line mt-2" />
          <div class="d-flex justify-content-between mt-1">
              <small> Start Date: 20/2/2020 </small>
              <small>End Date: 25/ 10/2020 </small>
          </div>
          <div class="record mt-3">
          <b-icon icon="check-circle" v-for="i in filled" :key="i" class="box h3 m-1" />
          <b-icon icon="circle" v-for="i in unfilled" :key="i" class="box h3 m-1" />
          </div>
      </div>
      <div class="loan-card pl-2 pr-2 py-3">
          <div class="d-flex justify-content-between">
              <small style="width: 101%"><b> Loan for January Business </b></small>
              <small class="float-right" style="line-height: normal; margin-right:-20px"> <b>N500</b> daily</small>
          </div>
          <div class="d-flex justify-content-between mt-1">
              <small><b> CYCLE: 20 WEEKS </b></small>
              <small ><b-badge class="px-3 py-1">completed</b-badge> </small>
          </div>
          <div class="record-line mt-2" />
          <div class="d-flex justify-content-between mt-1">
              <small> Start Date: 20/2/2020 </small>
              <small>End Date: 25/ 10/2020 </small>
          </div>
          <div class="record mt-3">
          <b-icon icon="check-circle" v-for="i in filled" :key="i" class="box h3 m-1" />
          <b-icon icon="circle" v-for="i in unfilled" :key="i" class="box h3 m-1" />
          </div>
      </div>
      <div class="loan-card pl-2 pr-2 py-3">
          <div class="d-flex justify-content-between">
              <small style="width: 101%"><b> Loan for January Business </b></small>
              <small class="float-right" style="line-height: normal; margin-right:-20px"> <b>N500</b> daily</small>
          </div>
          <div class="d-flex justify-content-between mt-1">
              <small><b> CYCLE: 20 WEEKS </b></small>
              <small ><b-badge class="px-3 py-1">completed</b-badge> </small>
          </div>
          <div class="record-line mt-2" />
          <div class="d-flex justify-content-between mt-1">
              <small> Start Date: 20/2/2020 </small>
              <small>End Date: 25/ 10/2020 </small>
          </div>
          <div class="record mt-3">
          <b-icon icon="check-circle" v-for="i in 30" :key="i" class="box h3 m-1" />
          <b-icon icon="circle" v-for="i in 0" :key="i" class="box h3 m-1" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            filled: 30,
            unfilled:0,
            repaymentDetail: [
                {
                    loanTitle: "Loan for January Business",
                    cycle: 20,
                    status: "completed",
                    startDate: "23/02/20",
                    endDate: "24/11/21",
                    unitAmount: 2000
                }
            ]
        }
    }
}
</script>

<style>
.loan-card {
    border: 1px solid #999;
    margin-left: 1px;
    margin-right:3px;
}
.box {
    border: 1px solid #d1d1d1;
    padding: 2px;
}
.record-line {
     background-image: linear-gradient(to right, greenyellow , green);
    height:3px;
}
</style>