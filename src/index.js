import authorization from './authorization.js';
import * as resources from './resources';

const fortnoxAbApiJsClient = {
  ...resources,
  authorization
};

export default fortnoxAbApiJsClient;
