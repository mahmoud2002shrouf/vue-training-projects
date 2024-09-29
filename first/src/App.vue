<template>
  <section>
    <div>
      <header>hello world</header>
      <ul>
        <friend-A
          v-for="friend in frinds"
          :key="friend.id"
          :id="friend.id"
          :name="friend.name"
          :phone="friend.phone"
          :email="friend.email"
          :isFav="friend.isFav"
          @taggle-fav="taglle"
        ></friend-A>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      frinds: [
        {
          id: 123,
          name: "soso",
          phone: "0599131584",
          email: "soso@soso.com",
          isFav: true,
        },
        {
          id: 124,

          name: "sosso",
          phone: "0599131584",

          email: "soso@soso.com",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    taglle(id) {
      const identifiedFriend = this.frinds.find((friend) => friend.id === id);
      identifiedFriend.isFav = !identifiedFriend.isFav;
    },
  },
};
</script>
>
