# myu_cors_cookie
Debug/Experiment project

## Requirements
- Node.js v14 or higher
- SSL certificate

```bash
$ openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

## Getting started

```
npm ci
npm run build
npm start
```

## Env
Create a local .env file with mail and password variable:

```
mail=""
password=""
```
