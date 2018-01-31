import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import yeelight from 'yeelight-led';

import {
  serverPort
} from '../etc/config.json';

const app = express();

app.use(json());
app.use(cors({ origin: '*' }));

app.post('/getBulbs', (req, res) => {
  console.log(req.brightness)
  yeelight.discover(device => {
    device.sendCommand('set_bright', [50, "smooth", 0]);
  });
});

const Server = app.listen(serverPort, () => console.log(`running on ${ serverPort }`));