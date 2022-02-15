<style>
  
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #inspire > div.v-dialog__content.v-dialog__content--active > div {
    overflow-y: auto !important;

}

</style>


<template>
  <v-container>
     <!-- buscador de modelo-->
     <v-row no-gutters @click="BuscarModelo">
         <v-col cols="12">
         <v-text-field
                     outlined
                     label="¿Que modelo es tu auto?"
                     append-icon="mdi-car-side"
                     style="font-family: 'roboto';"
                     hide-details
                 ></v-text-field>
         </v-col>
     </v-row>
     
     
  <!-- Dialog para buscar el modelo de vehiculo -->
  <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar
            dark
            color="white"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon style="color: black">mdi-arrow-left</v-icon>
            </v-btn>
  
  
            <v-text-field color="blue" light id="Buscar" v-model="search" placeholder="Busqueda Rapida..." class="text-black mt-4">
              <v-icon
                slot="append"
                color="gray"
              >
              mdi-car-side
              </v-icon>
            </v-text-field>
  
            <!-- <v-spacer></v-spacer> -->
  
            </v-toolbar-items>
          </v-toolbar>
          <v-list
            three-line
            subheader
          >
  
          <v-card
          max-width="400"
          class="mx-auto"
        >
          <v-container>
            <v-row dense>
              <v-col
                v-for="(Modelo, i) in filteredAndSorted"
                :key="i"
                cols="12"
              >
                <v-card
                  color="white"
                  light
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-subtitle-2"
                        v-text="Modelo.Modelo"
                      ></v-card-title>
      
                      <v-card-subtitle v-text="Modelo.AñosFormato" ></v-card-subtitle>
                    </div>
      
                    <v-avatar
                      class="ma-3"
                      size="80"
                      tile
                    >
                      <v-img :src="Modelo.Img" contain style="width:1rem"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
          </v-list>
        </v-card>
      </v-dialog>
  </v-row>

 <!-- Familias - Categorias Mas... -->

  <v-row>
    <v-col cols="12">
    </v-col>
  </v-row>

 <v-row>
  <v-col order="first justify-center text-center">
      <img src="/familias/1.png" style="width: 100%; padding: 5px">
      <p style="font-size: 0.8rem; font-weight: bold; font-family: roboto; text-align: center;">Amoriguadores</p>
  </v-col>
  <v-col order="first justify-center text-center">
      <img src="/familias/1.png" style="width: 100%; padding: 5px">
      <p style="font-size: 0.8rem; font-weight: bold; font-family: roboto; text-align: center;">Kits Embrague</p>
  </v-col>
  <v-col order="first justify-center text-center">
      <img src="/familias/1.png" style="width: 100%; padding: 5px">
      <p style="font-size: 0.8rem; font-weight: bold; font-family: roboto; text-align: center;">Parachoques</p>
  </v-col>
</v-row>

<v-row>
  <v-col order="first justify-center text-center">
      <img src="/familias/1.png" style="width: 100%; padding: 5px">
      <p style="font-size: 0.8rem; font-weight: bold; font-family: roboto; text-align: center;">Metales</p>
  </v-col>
  <v-col order="first justify-center text-center">
      <img src="/familias/1.png" style="width: 100%; padding: 5px">
      <p style="font-size: 0.8rem; font-weight: bold; font-family: roboto; text-align: center;">Soporte Motor</p>
  </v-col>

  <v-col order="first justify-center text-center" @click="FamiliasGo">
      <img src="/familias/mas.png" style="width: 100%; padding: 5px">
      <p style="font-size: 0.8rem; font-weight: bold; font-family: roboto; text-align: center;">Más</p>
  </v-col>
</v-row>

<!-- dialog Familias - Categoria -->
<div class="text-center" style="overflow: auto !important;">
  <v-bottom-sheet v-model="FamiliasShow" style="overflow: auto !important;">
    <v-list>
      <v-subheader>Familias</v-subheader>
      <v-list-group
      v-for="familia in Familias"
      :key="familia.Descripcion"
      v-model="familia.active"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-avatar>
          <v-avatar
            size="32px"
            familia
          >
            <img :src="familia.Img" :alt="familia.Descripcion" >
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="familia.Descripcion"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="child in familia.Categorias"
        :key="child.Descripcion"
      >
        <v-list-item-content>
          <v-list-item-title v-text="child.Descripcion"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
    </v-list>
  </v-bottom-sheet>
</div>  


 <!-- swiper slider  -->
 <v-row class="body-miau" style="margin-top: 1rem">
  <v-col cols="12">
    <!-- Swiper -->
    <div class="swiper mySwiper swiper-initialized swiper-horizontal swiper-pointer-events">
      <div class="swiper-wrapper">
        <div v-for="slider in sliders" :key="slider.Descripcion" class="swiper-slide"><img :src="'/sliders/' + slider.Url" style="width: 100%; border-radius: 1rem;"></div>
      </div>
    </div>
</v-col>
</v-row>


 <!-- Productos en oferta  -->
 <v-row >
  <v-col cols="12">

<template>
  <p class=" mt-5" style="font-size: 1.5rem;font-family: 'Audiowide';">
    Ofertas
  </p>



  <div class="row-yt" v-for="(Oferta, i) in Ofertas" :key="i">
    <div class="col-md-12-yt">
      <div class="container-img-yt">
        <div class="cover-img-yt">
          <img :src="Oferta.Img" class="img-yt" alt="yt-items">
        </div>
      </div>
      <div class="separador-yt">
        <div class="item1-yt">
          <div class="h4-yt" v-text="Oferta.Descripcion"></div>
          <div class="container-price-yt">
            <div class="price-offer" v-text="Oferta.PrecioCliente + ' $'"></div>
            <div class="price-real">{{ Oferta.PrecioCliente - (Oferta.PrecioCliente * Oferta.Descuento / 100) +' $' }}<span class="off-price" v-text="' ' + Oferta.Descuento + ' % off'"></span></div>
          </div>
        </div>
        <div class="item2-yt">
          <div class="buttom-yt" @click="ActiveModalProducto(Oferta._id)">
            <div class="icon-yt">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Modal Productos Opciones -->

  <v-dialog v-model="ModalProducto" width="500">
      <v-btn text @click="ModalProducto = false" style="background-color: white; border-radius: 0px; border: 1px solid white;">Agregar al Carrito</v-btn>
      <v-btn text @click="ModalProducto = false" style="background-color: white; border-radius: 0px; border: 1px solid white;">Agregar a Favoritos</v-btn>
      <v-btn text @click="ModalProducto = false" style="background-color: white; border-radius: 0px; border: 1px solid white;">Cancelar</v-btn>
    </div>

</v-dialog>





  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    style="font-family: 'roboto';"
  >

    <v-img
      height="150"
      src="data:image/jpeg;base64,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"
    >
  
            <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-h6 pl-0 text-uppercase" style="color: rgb(2, 7, 82)">
              Mando
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="grey lighten-3"
              icon
              fab    
              style="background-color: lightgray"
            >
              <v-icon style="color: black">mdi-plus</v-icon>
            </v-btn>
          </v-app-bar>
  </v-img>

    <div class="descripcion-yt">Amortiguador Delantero Izq...</div>

    <v-card-title class="mt-0 pt-0 mb-0 pb-0" style="color: rgb(2, 82, 6)">25.000 $<v-rating
      class="pl-2"
      :value="4.5"
      color="amber"
      dense
      half-increments
      readonly
      size="14"
    ></v-rating>
    <div class="grey--text pl-2" style="font-size: 0.8rem">
      4.5 (1)
    </div>
  </v-card-title>

    <v-card-text>

      <div class="my-4 text-subtitle-2">
        320-405 HID PUNTA CORBATA TUBO ESTANDAR 
      </div>
      <div class="my-1 text-subtitle-1">
        <b>Origen:</b> <img src="https://www.lifeder.com/wp-content/uploads/2018/10/640px-Flag_of_South_Korea.svg_.png" style="width: 25px;"> Korea
      </div>

      <div class="my-1 text-subtitle-1">
        <b>Aplicaciones: </b> 
      </div>
  
      
      <img :src="img" width="100px">

      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >

        <v-chip @click="reserve" style="width: 100%;">370Z 3.5 VQ35DE 2009 - 2010</v-chip> 
        <v-chip @click="reserve" style="width: 100%;">370Z 3.5 VQ35DE 2003 - 2007 USA</v-chip> 
        <v-chip @click="reserve" style="width: 100%;">620 1.6 J16 1980 - 1984</v-chip> 
        <v-chip @click="reserve" style="width: 100%;">720 1.6 J16 1980 - 1983</v-chip> 
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>
</v-col>
</v-row>


  </v-container>
</template>


<script>
  import API from "../api";

  export default {
    props: ["Usuario", "Session", "logout", "Overlay"],
    name: 'home',
    // variables 
    data() {
    return {
        ProductoSelect: '',
        dialog: false,
        ModalProducto: false,
        CurrentUser: this.Usuario,
        loading: false,
        img: "https://img.refaxchile.cl:9092/MODELOS/0371368.png",
        Modelos: [],
        FamiliasShow: false,
        Familias: [],
        search: '',
        selection: 1,
        sliders: [],
        Ofertas: []
        }
      },
        // funciones 
        methods: {

          ActiveModalProducto(id){
            this.ModalProducto = true;
            this.ProductoSelect = id;
            console.log(this.ProductoSelect)
          },

          async FamiliasGo(){
            this.FamiliasShow = true;
          },
          reserve () {
            this.loading = true
            this.img = this.img == "https://img.refaxchile.cl:9092/MODELOS/0371368.png" ? "https://img.refaxchile.cl:9092/MODELOS/0371366.png" : "https://img.refaxchile.cl:9092/MODELOS/0371368.png"
            setTimeout(() => (this.loading = false), 2000)
          },
          async BuscarModelo(){
            this.dialog = true;
            document.activeElement.blur();
            window.setTimeout(function () { 
            document.getElementById('Buscar').focus(); 
            }, 0); 
          }
         },


         beforeCreate(){
          this.$emit('OverlayEventOn')
         },


         async created(){
          this.sliders = await API.GET_SLIDERS();
          this.Modelos = await API.GET_MODELS();
          this.Familias = await API.GET_FAMILIES();
          var Datos = await API.GET_PRODUCTS_OFF();
          Datos.map(e => {

            if( e.Importadora == 'Refax' ){

              e.Img = 'https://img.refaxchile.cl:9092/FOTOGRAFIAS/' + e.CodigoImportadora + '/' + e.CodigoImportadora + 'A.jpg';

            }else if(e.Importadora == 'Mannheim'){

              e.Img = 'http://200.73.35.244:8080/webclient/images/' + e.OEM + '.jpg';

            }else if(e.Importadora == 'Alsacia'){

            }else if(e.Importadora == 'Bicimoto'){

            }



if(e.PrecioImportadora > 0 && e.PrecioImportadora <= 5000 ){

  e.PrecioCliente = Math.round(e.PrecioImportadora * (180/100) + e.PrecioImportadora)

}else if(e.PrecioImportadora > 5000 && e.PrecioImportadora <= 10000 ){

  e.PrecioCliente = Math.round(e.PrecioImportadora * (130/100) + e.PrecioImportadora)

}else if(e.PrecioImportadora > 10000 && e.PrecioImportadora <= 20000 ){

  e.PrecioCliente = Math.round(e.PrecioImportadora * (120/100) + e.PrecioImportadora)

}else if(e.PrecioImportadora > 20000 && e.PrecioImportadora <= 35000 ){

  e.PrecioCliente = Math.round(e.PrecioImportadora * (100/100) + e.PrecioImportadora)

}else if(e.PrecioImportadora > 35000 && e.PrecioImportadora <= 60000 ){

  e.PrecioCliente = Math.round(e.PrecioImportadora * (80/100) + e.PrecioImportadora)

}else if(e.PrecioImportadora > 60000 && e.PrecioImportadora <= 100000 ){

  e.PrecioCliente = Math.round(e.PrecioImportadora * (65/100) + e.PrecioImportadora)

}else if(e.PrecioImportadora > 60000 && e.PrecioImportadora <= 100000 ){

  e.PrecioCliente = Math.round(e.PrecioImportadora * (50/100) + e.PrecioImportadora)

}else if(e.PrecioImportadora > 100000 && e.PrecioImportadora <= 200000 ){

  e.PrecioCliente = Math.round(e.PrecioImportadora * (40/100) + e.PrecioImportadora)

}else if(e.PrecioImportadora > 200000){

  e.PrecioCliente = Math.round(e.PrecioImportadora * (30/100) + e.PrecioImportadora)

}



            if(e.PrecioImportadora > 100){
              e.PrecioCliente = Math.round(e.PrecioImportadora * (80/100) + e.PrecioImportadora)
            }
          })
          console.log(Datos)
          this.Ofertas = Datos;
          this.$emit('OverlayEventOff')
         },

        mounted(){
          var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1.5,
          centeredSlides: true,
          spaceBetween: 15,
          pagination: {
          clickable: true,
        },
      });
      
        },

        // Computed: Funciones que pueden crear nuevas variables a base de las variables de arriba ejemplo title(){ return a + b; }, se llama en la vista igual q data() con {{ tutle }}. Tambien sirve para funciones de la variables en tiempo real junto a v-model y colocar el nombre de la funcion. (show databading)

        computed: {
    filteredAndSorted(){
     // function de buscaqueda filter
     function compare(a, b) {
       if (a.Modelo < b.Modelo) return -1;
       if (a.Modelo > b.Modelo) return 1;
       return 0;
     }
      
     return this.Modelos.filter(Modelo => {
        return Modelo.Modelo.toLowerCase().includes(this.search.toLowerCase())
     }).sort(compare)
    },
  }
  }
</script>
