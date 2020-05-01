<template>
  <div class="dashboard-side-widget w-100 mt-3">
    
    <ul style="    list-style-type: none;
    white-space: nowrap;
    padding-inline-start: 6px;">
      <strong> Latest transaction </strong>
      <b-button class="mx-1 alajo-btn list-content" type="submit" variant="primary" size="sm" pill>View All</b-button> 
      <li  class="mt-2 list-content">
       <div class="dot align-middle" />  NGN 2500 transferred to 08054054055
      </li>
      <li  class="mt-2 list-content">
       <div class="dot align-middle bg-warning" />  NGN 2500 transferred to 08054054055
      </li>
      <li  class="mt-2 list-content">
       <div class="dot align-middle" />  NGN 2500 transferred to 08054054055
      </li>
      <li  class="mt-2 list-content">
       <div class="dot align-middle bg-primary" />  NGN 2500 transferred to 08054054055
      </li>
      <li  class="mt-2 list-content">
       <div class="dot align-middle bg-warning" />  NGN 2500 transferred to 08054054055
      </li>
      <li  class="mt-2 list-content">
       <div class="dot align-middle bg-danger" />  NGN 2500 transferred to 08054054055
      </li>
      <li  class="mt-2 list-content">
       <div class="dot align-middle bg-info" />  NGN 2500 transferred to 08054054055
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.dot {
  height: 10px;
  width: 10px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}
.dashboard-side-widget {
  overflow-x: hidden;
}
.list-content {
    font-size: 11px;
}
</style>