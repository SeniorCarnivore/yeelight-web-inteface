import axios from 'axios';

import {
  apiPrefix,
  serverPort
} from '../../etc/config.json';

export default {
  getBulbs: data => axios.post(`${ apiPrefix }:${ serverPort }/getBulbs`, data)
}
