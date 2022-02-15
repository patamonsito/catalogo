<template>
  <v-app id="inspire">
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase" :style="{'font-family': FontTitle }">solonissan tablet</v-toolbar-title>
         <v-spacer></v-spacer>
          <v-btn 
          elevation="0" 
          rounded color="white" depressed right>
            <v-icon center theme-dark>mdi-bullhorn-outline</v-icon>
          </v-btn>
        
      </v-app-bar>
    <!-- Navegacion hover movil -->

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!-- Navegacion hover -->


  <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-uppercase">
          Solo Nissan
        </v-list-item-title>
        <v-list-item-subtitle>
          Repuestos Nissan Chile
        </v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
  <v-list dense>
    <v-subheader>REPORTS</v-subheader>
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.link"
      >
        <v-list-item-icon :onclick="item.click">
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
    </v-navigation-drawer>
    <v-main>   
  <router-view :Usuario="Usuario" :Session="Session"></router-view>
    </v-main>

  </v-app>
</template>



<script>

import API from "./api";

  export default {
    // variables 
    name: 'app',
    data: () => ({
        Usuario: [],
        Mobile: false,
        Tablet: false,
        Pc: false,
        drawer: null,
        Session: false,
        FontTitle: 'Audiowide',
        selectedItem: 1,
        items: [],
        }),
        async created(){

          this.Usuario = await API.GET_USER_TOKEN();

          if(typeof(this.Usuario) === 'string'){
            this.items = await API.GET_MENU(false);
          }else{
            this.Session = true;
            this.items = await API.GET_MENU(true);
          }

        }
  }
</script>