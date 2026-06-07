# Deployment

## Local

```bash
cp .env.example .env
npm install
npm test
npm run dev
```

## Docker

```bash
docker build -t student-marketplace-api .
docker run --env-file .env -p 3000:3000 student-marketplace-api
```

## Cloud

Deploy API to Render, Railway, Fly.io, or Azure App Service. Use managed PostgreSQL and store JWT secret as an environment variable.

## Environment Variables

See `.env.example`.

## Smoke Test

After deployment:

1. Open the health endpoint or homepage.
2. Confirm database-backed routes work.
3. Check logs for errors.
4. Capture screenshot for README.
