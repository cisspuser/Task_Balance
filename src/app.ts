import express = require('express');
import globalErrorHandler from './error/handler/global-error-handler';
import { router } from './route';
import 'dotenv/config';

const app = express();
const port: number = Number(process.env['PORT']) || 3000;
const host: string = process.env['HOST'] || 'localhost';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/users', router);
app.use(globalErrorHandler);

app.listen(port, host, () => {
    console.info(`Server: http://${host}:${port}`);
});
