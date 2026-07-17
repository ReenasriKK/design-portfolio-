# Deploying to Render

1. Create a new Web Service on Render.
2. Connect your GitHub/GitLab repo and select the branch to deploy.
3. Set the build command to:

```
pnpm install
pnpm build
```

4. Set the start command to:

```
node dist/index.js
```

5. Set environment variables:
- `NODE_ENV=production`
- `PORT=3000` (or leave blank — Render provides one)

6. Optionally, use the `Docker` option and point to the repository; Render will use the `Dockerfile` at the repo root.

7. Deploy and monitor logs in the Render dashboard.
