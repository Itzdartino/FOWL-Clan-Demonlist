export default {
  async fetch(request) {
    return new Response("This is FOWL Clan Demonlist!", {
      headers: { "Content-Type": "text/html" },
    });
  },
};
