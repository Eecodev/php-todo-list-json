const {createApp} = Vue;

createApp({
    data(){
        return{
            apiUrl: 'server.php',
            todoList: [],
        }
       
    },
    methods:{
        readList(){
            axios
              .get(this.apiUrl)
              .then((response) => {
                  // handle success
                  //console.log(response.data);
                  this.todoList = response.data;
                })
                .catch((error) => {
                  // handle error
                  console.log(error);
                })
                .finally(() => {
                  // always executed
                });
      
          },
    },
    mounted() {
        this.readList();
    }


}).mount('#app');

