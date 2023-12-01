const {createApp} = Vue;

createApp({
    data(){
        return{
            todos: [
                {
                    text: 'Select playwrights for next show',
                    done: true,
                    id: 1
                },
                {
                    text: 'Cast actors',
                    done: false,
                    id: 2
                },
                {
                    text: 'Decide whether the show should be site-specific or presented in a traditional theatre setting',
                    done: false,
                    id: 3
                },
                {
                    text: 'Schedule rehearsals',
                    done: true,
                    id: 4
                }
            ],
        }
       
    },
    methods:{
    }


}).mount('#app');

