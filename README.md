# blobby-auth-header

An HTTP Authorization client for [Blobby](https://github.com/asilvas/blobby)
to enable secure API operations. 



## Options

```
# config/local.js
module.exports = {
  auth: {
    apiKey: {
      driver: 'blobby-auth-header',
      options: {
        apiKey: 'mySecretAPIKey that really belongs in a secure configuration file',
        test: /ApiKey\s(.*)/ // my custom Authorization header parser
      }
    }
  },
  storage: {
    myStorage: {
      driver: 'blobby-s3',
      auth: 'apiKey',
      options: {...} // see https://github.com/asilvas/blobby-s3 for S3 options
    }
  }
};
```

| Option | Type | Default | Desc |
| --- | --- | --- | --- |
| apiKey | string | (required) | Secret to access secure routes in Blobby REST API |
| test | RegExp | `/apikey\s(.*)/i` | Expression used to parse HTTP Authorization header |


### Secrets

Recommended to store your `apiKey` in blobby's **Secure Configuration**.


## Example Usage

Start my server:
```
blobby server
```

Upload a file:
```
curl -XPUT -H "Authorization: ApiKey mySecretAPIKey that really belongs in a secure configuration file" --data-binary "@./some-file.jpg" http://localhost/myStorage/some/file.jpg
```
