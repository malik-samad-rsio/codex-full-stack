# Codex Full Stack Webapp

This example provides a small Express server with React server–side rendering and Sequelize for MySQL. Everything is written in TypeScript.

## Requirements
- Node.js 18+
- MySQL database

## Local Setup
```bash
npm install
npm run build
npm start
```
During development you can run `npm run dev`.

Swagger documentation is available at `/api-docs` when running locally.

## Database
Set environment variables `DB_NAME`, `DB_USER`, `DB_PASS` and `DB_HOST` for your MySQL instance.

## Docker
Two Dockerfiles are provided:
- `Dockerfile.server` builds and runs the Express API/SSR server.
- `Dockerfile.client` builds and serves the React client bundle.

Build the images locally with for example:
```bash
docker build -f Dockerfile.server -t my-server .
docker build -f Dockerfile.client -t my-client .
```

## CloudFormation
`cloudformation.yaml` defines an ECS Fargate cluster with separate services for the server and client. Provide ECR image URIs for the parameters `ServerImage` and `ClientImage` when deploying.

## GitHub Actions
A workflow at `.github/workflows/deploy.yml` builds Docker images, pushes them to ECR and deploys to ECS. Pushes to `main` deploy to production; other branches deploy to staging.

## Documentation
See [docs/architecture.md](docs/architecture.md) for a simple architecture diagram.
