const app = Vue.createApp( {
    data ()
    {
        return {
            firstGool: "learn vue",
            master: "goooal",


        }
    },
    methods: {
        outPut ()
        {
            const rand = Math.random()
            if ( rand > 0.5 )
            {
                return this.master
            } else
            {
                return "nio"
            }
        }
    }
} )
app.mount( '#user-goal' )