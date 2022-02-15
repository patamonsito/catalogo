<template>
  <v-app id="inspire" clipped-left>
    <v-container class="container-pc" style="margin-top: 1rem">
      <v-card class="d-flex justify-space-between" flat tile>
        <div class="text-uppercase align-self-center" :style="{'font-family': FontTitle }" style="font-size: 1.5rem" >CHILEREPUESTOS</div>


      <v-autocomplete
      :loading="SearchLoading"
      :items="Modelos"
      :search-input.sync="search"
      class="mx-4"
      flat
      :hide-no-data="true"
      :no-filter="true"
      :open-on-clear="falsee"
      :clearable="falsee"
      label="¿Que modelo es tu auto?"
      solo-inverted
      append-icon="mdi-car-side"
      style="font-family: 'roboto'; padding: 0 2rem;"
      hide-details
      @keyup="BuscarModelo(search)"
    >
  
    <template v-slot:item="{ item }">
      <v-list-item link :to="'modelo/' + item._id">
        
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar
            class="ma-3"
            size="80"
            tile
          >
            <v-img :src="item.Img" contain style="width:1rem"></v-img>
          </v-avatar>

          <div>
            <v-card-title
              class="text-subtitle-2"
              v-text="item.Modelo"
            ></v-card-title>

            <v-card-subtitle v-text="item.AñoI + ' - ' + item.AñoT" ></v-card-subtitle>
          </div>
        </div></v-list-item>
    </template>
  
  
  </v-autocomplete>



          <v-badge avatar bordered overlap class="align-self-center">
          <template v-slot:badge>
            <v-avatar class="error">
              0
            </v-avatar>
          </template>
  
          <v-btn outlined icon small light fab class="blue lighten-5" @click="carrito_dialog = true">
            <v-icon light>mdi-cart</v-icon>
          </v-btn>
        </v-badge>


        <v-btn outlined icon small light fab class="blue lighten-5 align-self-center" style="margin-left: 1rem;">
          <v-icon light>mdi-account</v-icon>
        </v-btn>

      </v-card>

<!-- Dialog carrito  -->

<v-navigation-drawer
v-model="carrito_dialog"
absolute
temporary
right
>
<v-list-item>
  <v-list-item-avatar>
    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
  </v-list-item-avatar>

  <v-list-item-content>
    <v-list-item-title>Carrito Compra</v-list-item-title>
  </v-list-item-content>
</v-list-item>

<v-divider></v-divider>

<v-list dense>
  <v-list-item>
  <!-- <v-list-item
    v-for="item in items"
    :key="item.title"
    link
  > -->
    <v-list-item-icon>
      <v-icon>mdi-car</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>Carrito</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</v-list>
</v-navigation-drawer>


    </v-container>


    <!-- <v-card class="d-flex justify-start mb-6" :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'" flat
      tile>
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        justify-start
      </v-card>
    </v-card>

    <v-card class="d-flex justify-end mb-6" :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'" flat tile>
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        justify-end
      </v-card>
    </v-card>

    <v-card class="d-flex justify-center mb-6" :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'" flat
      tile>
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        justify-center
      </v-card>
    </v-card>

    <v-card class="d-flex justify-space-between mb-6" :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat tile>
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        justify-space-between
      </v-card>
    </v-card>

    <v-card class="d-flex justify-space-around mb-6" :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat tile>
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        justify-space-around
      </v-card>
    </v-card>
    </div> -->
    <!-- Navegacion hover movil -->

    <v-main>   
      <router-view :Usuario="Usuario" :Overlay="Overlay" :Session="Session" @OverlayEventOn="OverlayEventOn"  @OverlayEventOff="OverlayEventOff"></router-view>
        </v-main>

  </v-app>
</template>



<script>

  import API from "./api";

  export default {
    // variables 
    name: 'app',
    data: () => ({
      clipped: true,
      carrito_dialog: false,
      SearchLoading: false,
      search: null,
      Modelos: [],
      Usuario: [],
      Mobile: false,
      Tablet: false,
      falsee: false,
      truee: true,
      Pc: false,
      drawer: null,
      Session: false,
      FontTitle: 'Audiowide',
      selectedItem: 1,
    }),
    async created() {

      this.Usuario = await API.GET_USER_TOKEN();
      // this.Modelos = await API.GET_MODELS();

      if (typeof (this.Usuario) === 'string') {
        this.items = await API.GET_MENU(false);
      } else {
        this.Session = true;
        this.items = await API.GET_MENU(true);
      }

    },

    methods: {

      async BuscarModelo(event){
        var noclear = this.search;

        console.log(event)

          if(this.search.length > 2){
                    this.select = this.search
                    this.Modelos = await API.GET_MODELS_SEARCH(this.search);
          }else{
            this.Modelos = []
          }

      }

    },
  }
</script>