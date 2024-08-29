# ReactNestEvs

The goal of this project is to build a front/back application, to manage items. This project is a technical test for EVS.

# Project overview

This project is structured as a monorepo managed with [Nx](https://nx.dev/), leveraging modern technologies to build a scalable and maintainable application.

- **API**: The backend is built using [NestJS](https://nestjs.com/), a progressive Node.js framework. The API is fully documented and accessible via [Swagger](https://swagger.io/) at `/api`, making it easy to explore and test the available endpoints.

- **Frontend**: The frontend application is developed with [React](https://reactjs.org/), utilizing [Emotion](https://emotion.sh/docs/introduction) for styling, [Material-UI](https://mui.com/) for a rich set of UI components, and [Recoil](https://recoiljs.org/) for efficient state management.

Together, these tools create a robust and flexible foundation for building both the backend and frontend of the application.


### Shared libraries

In this project, we utilize Nx libraries to share code across different services and applications within the monorepo. This approach promotes code reusability, consistency, and maintainability, reducing duplication and enabling faster development.

#### Libraries overview

- **apis**: This library contains the logic for making HTTP requests to the backend API using Axios. By centralizing API calls here, we ensure consistent communication with the backend across the entire frontend application.

- **dtos**: The `dtos` library defines the data transfer objects (DTOs) used throughout the application. These models are crucial for structuring the data exchanged between the frontend and backend, supporting Swagger documentation generation in the backend, and enabling validation to ensure data integrity.

- **services**: This library holds services that are shared primarily among the API applications. These services encapsulate business logic and functionalities that can be reused across different parts of the backend, promoting a modular and DRY (Don't Repeat Yourself) approach.

- **stores**: The `stores` library is focused on state management using Recoil. It provides generalized methods and tools for managing state across the frontend application, allowing for consistent and efficient state handling throughout the React components.

- **tokens**: The `tokens` library offers injection tokens for services and global constants. This library is particularly useful for dependency injection in NestJS services, as well as for maintaining consistent and easily configurable constants across all projects within the monorepo.

#### Why shared libraries?

By organizing common logic and utilities into shared libraries, we achieve several benefits:

- **Code Reusability**: Shared libraries allow us to write code once and reuse it across different parts of the project, reducing duplication and potential bugs.
- **Consistency**: Centralizing common functionality ensures that all applications and services adhere to the same standards and practices.
- **Maintainability**: With shared libraries, updates or bug fixes in one place automatically propagate to all dependent applications, simplifying maintenance and reducing the risk of errors.
- **Scalability**: As the project grows, shared libraries help keep the codebase organized and modular, making it easier to manage and scale.

Using these libraries effectively allows us to build a more robust and maintainable codebase, ensuring that the project can evolve smoothly over time.

## Install

To be able to work with the project, you just need to do an `npm install` at root.

## How to run (react / nest or both)

To run, lint, test or e2e one app or both, you can use npm run with one of this commands.

You can run the stack with docker, `npm start` is running both projects in a dist posture, reflecting the production environment.
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

## Urls

| Entry Point over Docker                             | Description                                           |
|-----------------------------------------------------|-------------------------------------------------------|
| [http://localhost:3000](http://localhost:3000)      | Frontend application (React)                          |
| [http://localhost:3001/api](http://localhost:3001/api) | Backend API (NestJS) and Swagger documentation         |

| Entry Point over nx serve                           | Description                                           |
|-----------------------------------------------------|-------------------------------------------------------|
| [http://localhost:4200](http://localhost:4200)      | Frontend application (React)                          |
| [http://localhost:3001/api](http://localhost:3001/api) | Backend API (NestJS) and Swagger documentation         |
