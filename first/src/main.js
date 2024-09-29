import { createApp } from 'vue';
import App from "./App.vue"
import FreandA from "./compunants/FreandA.vue";

const app = createApp( App );
app.component( "friend-A", FreandA );

app.mount( '#app' );


