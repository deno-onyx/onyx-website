// Oak
import { Application, send, join, log } from '../deps.ts';

// Frontend dependencies
import { React, ReactDOMServer } from '../deps.ts';
import { js, html, hydratePath } from './ssrConstants.tsx';

const port: number = Number(Deno.env.get('PORT')) || 8080;
const app: Application = new Application();

app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname;
  const method = ctx.request.method;

  // Server-Side Rendering -- References to HTML, CSS and JS Hydration found in /server/ssrConstants.tsx
  if (filePath === '/') {
    ctx.response.type = `text/html`;
    ctx.response.body = html;
  } else if (filePath === hydratePath) {
    ctx.response.type = 'application/javascript';
    ctx.response.body = js;
  } else if (filePath === '/styles.css') {
    ctx.response.type = 'text/css';
    await send(ctx, filePath, {
      root: join(Deno.cwd(), 'views/assets'),
    });
  } 
});

log.info(`Server is up and running on ${port}`);
await app.listen({ port });