export default (req, storageId, fileKey, authConfig, cb) => {
  const auth = req.headers && req.headers['authorization'];
  if (!auth) return void cb(new Error('Authorization header required'));
  const exp = authConfig.test || /apikey\s(.*)/i;
  const result = exp.exec(auth);

  if (!result || result.length !== 2) return void cb(new Error('Authorization header is invalid'));

  if (result[1] !== authConfig.apiKey) return void cb(new Error('Invalid Authorization secret'));

  cb(); // OK
};
