<template>
  <ul>
    <li>
      <h1>{{ name }} {{ isFav ? "(fav)" : "" }}</h1>
      <p>{{ isFav }}</p>
      <button @click="taggle">show detals</button>
      <button @click="taggleFav">taggle fav</button>

      <ul v-if="isVisible">
        <li>phone :{{ phone }}</li>
        <li>email :{{ email }}</li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  // props: [ "name", "phone", "email", "isFav" ],
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFav: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    taggle() {
      this.isVisible = !this.isVisible;
    },
    taggleFav() {
      this.$emit("taggle-fav", this.id);
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
