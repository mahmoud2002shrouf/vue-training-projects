const app = Vue.createApp( {
  data ()
  {
    return {
      goals: []
      ,
      goal: "",
      x: 1,
      y: 0
    };
  },
  methods: {
    addGoal ()
    {
      this.goals.push( this.goal );
      this.goal = ""
    },
    consol ()
    {
      console.log( "fuck" )
    },
    remove ( index )
    {
      this.goals.splice( index, 1 );
    }
  }
} );

app.mount( '#user-goals' );
