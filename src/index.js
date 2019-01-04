import authorization from './authorization.js';
import * as resources from './resources';

const fortnoxAbApiClient = {
  ...resources,
  authorization
};

export default fortnoxAbApiClient;
