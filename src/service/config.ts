
import {IAnyObject} from '@src/types';

interface IConfig {
  [propName: string]: IAnyObject;
}

const config: IConfig = {
  development: {
    default: "https://cnodejs.org/api/v1/",
  },
  production: {
    default: "https://cnodejs.org/api/v1/"
  },
};

export default config;
