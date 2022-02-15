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
<h1>PANTALLA TABLET</h1>
</template>

<script>
  import API from "../api";

  export default {
    props: ["Usuario", "Session", "logout", "Mobile", "Pc", "Tablet"],
    name: 'home',
    // variables 
    data: () => ({
        dialog: false,
        loading: false,
        img: "https://img.refaxchile.cl:9092/MODELOS/0371368.png",
        Modelos: [],
        FamiliasShow: false,
        Familias: [],
        search: '',
        selection: 1,
        sliders: [],
        }),
        // funciones 
        methods: {

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

         async created(){
          this.sliders = await API.GET_SLIDERS();
          this.Modelos = await API.GET_MODELS();
          this.Familias = await API.GET_FAMILIES()
          console.log(this.Sliders)  

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
     // function to compare names
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
