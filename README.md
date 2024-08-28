# ReactNestEvs

The goal of this project is to build a front/back application, to manage items. This project is a technical test for EVS.

## Run projects (react / nest or both)

To run, lint, test or e2e one app or both, you can use npm run with one of this commands.
Start is running both projects in a dist posture, reflecting the production environment.
| Command           | Description                                                                                               | Run Individually or All at Once                                |
|-------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `start`     | Start a production stack for React and Api.                                                  | Run all in docker using `npm start`.                  |
| `serve:react`     | Starts the development server for the React application.                                                  | Run individually using `npm run serve:react`.                  |
| `build:react`     | Builds the production version of the React application.                                                   | Run individually using `npm run build:react`.                  |
| `lint:react`      | Lints the codebase for the React application to ensure code quality and adherence to standards.           | Run individually using `npm run lint:react`.                   |
| `test:react`      | Runs unit tests for the React application.                                                                | Run individually using `npm run test:react`.                   |
| `e2e:react`       | Runs end-to-end tests for the React application.                                                          | Run individually using `npm run e2e:react`.                    |
| `serve:api`       | Starts the development server for the NestJS API application.                                             | Run individually using `npm run serve:api`.                    |
| `build:api`       | Builds the production version of the NestJS API application.                                              | Run individually using `npm run build:api`.                    |
| `lint:api`        | Lints the codebase for the NestJS API application.                                                        | Run individually using `npm run lint:api`.                     |
| `test:api`        | Runs unit tests for the NestJS API application.                                                           | Run individually using `npm run test:api`.                     |
| `e2e:api`         | Runs end-to-end tests for the NestJS API application.                                                     | Run individually using `npm run e2e:api`.                      |
| `serve:all`       | Starts the development servers for both the React and NestJS API applications simultaneously.             | Run all services at once using `npm run serve:all`.            |
| `lint:all`        | Lints the codebases for both the React and NestJS API applications simultaneously.                        | Run all linting at once using `npm run lint:all`.              |
| `test:all`        | Runs unit tests for both the React and NestJS API applications simultaneously.                            | Run all tests at once using `npm run test:all`.                |
| `e2e:all`         | Runs end-to-end tests for both the React and NestJS API applications simultaneously.                      | Run all e2e tests at once using `npm run e2e:all`.             |
