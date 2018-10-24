import express from 'express';
import log from 'fancy-log';
import router from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  log('Server Started');
});

export default app;