const app = Vue.createApp( {
    data ()
    {
        return {
            freands: [ {
                id: 123,
                name: 'soso',
                phone: "0599131584",
                email: "test@example.com",
                vis: true,
            },
            {
                id: 124,

                name: 'momo',
                phone: "0592274397",
                email: "test2@example.com",
                vis: true,

            } ]
        }
    },
    methods: {
        taggleVisibility ( id )
        {
            this.freands.filter( ( freand ) =>
            {
                if ( freand.id === id )
                {
                    freand.vis = !freand.vis;
                }
            } )
        }
    }
} )
app.mount( '#app' )