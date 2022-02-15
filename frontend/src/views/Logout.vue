<template></template>

<script>
import API from "../api";

export default {
       async created(){
        await API.GET_LOGOUT();
        this.$router.go(this.$router.push('/'));
       }
    }
       
  </script>