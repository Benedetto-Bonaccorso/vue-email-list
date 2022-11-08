const { createApp } = Vue

createApp({
  data() {
    return {
        eMailsNeeded: 10,
        eMails: [],
    }
    }, 
    methods:{
        getEmails(){
            for(let i = 0; i < this.eMailsNeeded; i++){
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then ( response => {
                        console.log(response)
                        if(this.eMails.length === 10){
                            this.eMails.length = []
                        }
                        this.eMails.push(response.data.response)
                        console.log(this.eMails)
                            }
                        )
                }
        }
    },
    mounted(){
        
    }

}).mount('#app')