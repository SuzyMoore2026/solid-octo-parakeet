import express, { Request, Response } from 'express';
import './config/database';
import routes from './routes';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'octofit-backend',
    port,
    baseUrl,
  });
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Octofit backend listening on ${baseUrl}`);
});
