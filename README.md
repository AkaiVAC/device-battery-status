# Battery Status Viewer

This web app has been created, keeping in mind, the guidelines and requirements set down in the document provided along with the data.

The primary goal of this application is to achieve the following:

-   Identify schools with the highest number of battery issues.
-   For each school, identify the devices which are in need of battery replacement.

The current solution tries to achieve the above goals in the best possible way within the available timeframe.

## Installation and running the app

To install this app locally, extract the project files to a directory of your choice and run the following commands to install all dependencies:

```bash
cd installation_directory
yarn
yarn start
```

In case you are using NPM:

```bash
cd installation_directory
npm install
npm run start
```

## Running Tests

To test the project, use:

```bash
yarn test
```

Or:

```bash
npm run test
```

## Considerations for Further Improvements

The following features were excluded due to their scope and time constraints:

1. End-to-end testing was left out due to tooling problems with Svelte.
2. Ability to filter the academies and devices by name and status.
3. Abillity to filter chart view by different data points.
4. UX can be further improved for the chart page.
5. Help section needs more content.
6. Animations and transitions can be added for better UX.
7. Theme can be improved further using a proper design system.
