import http from "http";
import routes from "./controllers/index.js";
import url from "url";
/**
 * @param {http.IncomingMessage} request
 * @param {http.ServerResponse} response
 */
const handleRouter = (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, "");
  if (typeof routes[path] === "function") {
    const handleRequest = routes[path];

    
    const { method, url } = request;

    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        
        const data = {
          body,
          method,
          url,
          query: parsedUrl.query,
        };

        handleRequest(data, (dataResponse, statusCode) => {
          const payload =
            typeof dataResponse === "object"
              ? JSON.stringify(dataResponse)
              : {};

          response.setHeader("Content-Type", "application/json");
          response.writeHead(statusCode ?? 200);

          response.end(payload);
        });
      });
  } else {
    // responde com 404
    response.setHeader("Content-Type", "application/json");
    response.writeHead(404);
    response.end(
      JSON.stringify({
        has_error: true,
        error: "endpoint not found",
      })
    );
  }
};
export const handle = (request, response) => {
  return handleRouter(request, response)?.catch((err) => {
    response.writeHead(500);
    return response.end(JSON.stringify(err));
  });
};
