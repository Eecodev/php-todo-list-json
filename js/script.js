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


                if(this.newTask == ""){
                  return;
                }
                const data = new FormData();
                data.append("task", this.newTask);

                axios
                .post(this.apiUrl, data)
                .then((response) => {
                  console.log(response.data);
                  this.todoList = response.data;
                })
                .catch((error) => {
                  console.log(error);
                })
          },
          updateTask(index){
            const data = new FormData();
            data.append("updatetask", index);
            axios
            .post(this.apiUrl, data)
            .then((response) => {
                console.log(response.data);
                this.todoList = response.data;
              })
          }
    },
    mounted() {
        this.readList();
    }


}).mount('#app');

