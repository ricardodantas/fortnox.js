const buildHeadersCredentials = (credentials) => ({
  'Access-Token': credentials.accessToken,
  'Client-Secret': credentials.clientSecret
});

export default buildHeadersCredentials;

