<template>
    <v-app >
       <v-main>
          <v-container fluid fill-height>
             <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                   <v-card class="elevation-12">
                      <v-toolbar dark color="primary">
                         <v-toolbar-title>{{ Session }} {{isRegister ? stateObj.register.name : stateObj.login.name}} form</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                      <form ref="form" @submit.prevent="isRegister ? register() : login()">
                             <v-text-field
                               v-model="username"
                               name="username"
                               label="Username"
                               type="text"
                               placeholder="username"
                               required
                            ></v-text-field>
                            
                             <v-text-field
                               v-model="password"
                               name="password"
                               label="Password"
                               type="password"
                               placeholder="password"
                               required
                            ></v-text-field>
 
                            <v-text-field v-if="isRegister"
                               v-model="confirmPassword"
                               name="confirmPassword"
                               label="Confirm Password"
                               type="password"
                               placeholder="cocnfirm password"
                               required
                            ></v-text-field>
                            <div class="red--text"> {{errorMessage}}</div>
                            <v-btn type="submit" class="mt-4" color="primary" value="log in">{{isRegister ? stateObj.register.name : stateObj.login.name}}</v-btn>
                            <div class="grey--text mt-4" v-on:click="isRegister = !isRegister;">
                               {{toggleMessage}}  
                            </div>
                       </form>
                      </v-card-text>
                   </v-card>
                 
                </v-flex>
             </v-layout>
          </v-container>
       </v-main>
    </v-app>
 </template>


 <script>


import API from "../api";

     export default {
      props: ["Usuario", "Session", "logout", "Mobile", "Pc", "Tablet"],
      name: "App",
      data() {
        return {
          username: "",
          password: "",
          confirmPassword: "",
          isRegister : false,
          errorMessage: "",
          ip: {},
          stateObj: {
             register :{
                name: 'Register',
                message: 'Aleady have an Acoount? login.'
             },
             login : {
                name: 'Login',
                message: 'Register'
             }
          }
        };
      },

      beforeCreate(){
          this.$emit('OverlayEventOn')
         },

      async created(){

        if(this.Session == true){
            this.$router.push('/') 
        }

        fetch('https://api.ipify.org?format=json')
            .then(x => x.json())
            .then(({ ip }) => {
                this.ip = ip;
            });
      },

      mounted(){

      this.$emit('OverlayEventOff')
      
        },

      methods: {
        async login() {
            const { username, password, ip } = this;
            var Response = await API.USER_LOGIN(username, password, ip);
            if(Response.message == 'Inicio Exitoso' ){
                this.$router.go(this.$router.push('/'));
            }else{
                this.errorMessage = Response.message;
            }
        },
        register() {
           if(this.password == this.confirmPassword){
              this.isRegister = false;
              this.errorMessage = "";
              this.$refs.form.reset();
           }
           else {
             this.errorMessage = "password did not match"
           }
        }
      },
          computed: {
           toggleMessage : function() { 
              return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message }
        }
    };
    </script>