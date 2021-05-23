export default {
  users: [
    {
      profile: "./images/wecode.jpeg",
      id: "wecode_bootcamp",
      nickname: ">wecode | 위코드",
    },
    {
      profile: "./images/wecode2.png",
      id: "wecode_founder",
      nickname: "송은우 (Eun Woo Song)",
    },
    { profile: "./images/wecode3.png", id: "wecode_korea", nickname: "" },
  ],

  searchUser(id = "") {
    if (!id.length) return [];

    const users = this.users.filter((user) => user.id.includes(id));
    return users;
  },
};
