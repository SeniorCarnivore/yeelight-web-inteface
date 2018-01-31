import express from 'express';
import { json } from 'body-parser';

const App = express();
App.use(json());

App.get('/presets', (req, res) => console.log(req, res));

const Server = App.listen(8888, () => console.log('test 666'));