import dgram from 'dgram';
import ip from 'ip';
import { EventEmitter } from 'events';

import {
    serverPort,
    multicastAddr,
    discoveryMsg
} from '../etc/config.json';

export default class Bulbs {
  constructor () {
    this.socket = dgram.createSocket('udp4');
    this.buffer = new Buffer(discoveryMsg);
    this.bulbs = [];
    EventEmitter.call(this);

    process.nextTick(() => {
      this.socket.on('message', (message, address) => {
        // if we sent the message, ignore it
        console.log(message, address)
        if (ip.address() == address.address) {
          return;
        }
      
        // handle socket discovery message
        console.log(message, address)
      
      });
    });

    this.getBulbs();
  }   
      
  getBulbs = () => {
    this.socket.send(this.buffer, 0, this.buffer.length, serverPort, multicastAddr, (err, bytes) => {
      if (err) throw err;
    });
  }
};