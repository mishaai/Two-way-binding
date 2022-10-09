
const alert =  {
    props:["message","show"],
    template: '<div ><h1 v-show="show">{{message}}</h1></div>',
  };
Vue.createApp({
    data() {
      return {
        text:'',
        text2:'',
        show:false,
        message:'Button is pressed',

      }
    },
    methods: {
        say_alert(event){
            
            event.type == "mousedown" ? this.show= true:null;
            event.type == "mouseup" || event.type == "mouseout" ? this.show= false:null;

        },
        keydown(event){
            this.text = event.target.value;
        },
        keydown_enter(event){
            this.text2 = event.target.value;
        }
    },
  }).component('alert',alert).mount('#assignment');

