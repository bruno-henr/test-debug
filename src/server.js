import http from 'http';
import { handle } from './routes.js';

const server = http.createServer(handle);
const port = 3003;
server.listen(port, () => {
    console.log(`listening on port ${port}`);
});