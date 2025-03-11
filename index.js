export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    
    // Default to serving index.html if root is requested
    let path = url.pathname === "/" ? "/index.html" : url.pathname;

    try {
      return await env.ASSETS.fetch(new Request(url.origin + "/public" + path, request));
    } catch (e) {
      return new Response("404 Not Found", { status: 404 });
    }
  },
};
