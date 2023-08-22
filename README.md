# Jokes web app

This project was setup using Vite and React.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.

### `yarn build`

Builds the app for production to the `dist` folder.

### `yarn test`

Runs the unit and integration tests.

## Git Hub Actions

The project is setup with a CI/CD pipeline using GitHub Actions. The pipeline runs the tests and builds the app. The build is then deployed to S3 Bucket.

### GitHub Secrets

The following secrets are required to be set in the GitHub repository:

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY


### GitHub Variables

The following variables are required to be set in the GitHub repository:

- S3_BUCKET_NAME
- AWS_REGION