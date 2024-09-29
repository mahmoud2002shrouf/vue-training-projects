const app = Vue.createApp( {
  template: '',
  data ()
  {
    return {
      currentUserInput: '',
      message: 'Vue is great!',

    };
  },
  methods: {
    saveInput ( event )
    {
      this.currentUserInput = event.target.value;
    },
    setText ()
    {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      console.log( this.$refs )

    },
  }, beforeCreate ()
  {
    console.log( 'hello' );
  },
  created ()
  {
    console.log( 'created' );
  },
  beforeMount ()
  {
    console.log( "hello vue !" )
  }


} );

app.mount( '#app' );
