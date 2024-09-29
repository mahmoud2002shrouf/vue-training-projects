const app = Vue.createApp( {
  data ()
  {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add ()
    {
      this.counter++;
    },
    remove ()
    {
      this.counter--;
    },
    adds ( x )
    {
      this.counter = this.counter + x;
    },
    clean ()
    {
      this.counter = 0;
    },
    setName ( e )
    {
      this.name = e.target.value;
      console.log( this.name )
    },
    sub ()
    {


      alert( `${ this.name }` )
    }
  }
} );

app.mount( '#events' );
const app2 = Vue.createApp( {
  data ()
  {
    return {
      rawHtml: "fucking",
      objectOfAttrs: {
        id: 'app',
        class: 'wrapper'
      }
    }
  }
} );
app2.mount( '#app' )
