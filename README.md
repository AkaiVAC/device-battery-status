# Battery Status Viewer

This web app has been developed, keeping in mind, the guidelines set down in the document provided along with the data.

The primary objectives of this application is to achieve the following:

-   Identify schools with the highest number of battery issues.
-   For each school, identify the devices which are in need of battery replacement.

The current solution tries to achieve the above goals in the best possible way within the available timeframe.

## Installation

To install this app locally, extract the project files to a directory of your choice and run the following commands to install all dependencies and start the app:

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

To run all tests in the project, use:

```bash
yarn test
```

Or:

```bash
npm run test
```

## Tech Stack and File Structure

### Dependencies

The app uses the following dependencies for running and testing:

-   Svelte framework
-   Parcel bundler
-   Babel transpiler
-   Jest testing framework

### Project Structure

```
project
│   .babelrc
│   .gitignore
│   jest.config.js
│   package.json
│   README.md
│   yarn.lock
│
└───src
│   │   App.svelte
│   │   main.js
│   └───api
│   └───components
│   └───data
│   └───tests
│
└───public
    │   global.css
    │   index.html
```

The project root contains all configuration files. It will also include **dist** and **.cache** folders on running the app.

**App.svelte** is the main entry point to the app. **main.js** initializes Svelte.

**Public** folder includes global styles and the **index.html**.

The **src** folder contains all the script files, components and tests in their respective folders. Of note, the **api** folder contains the file **data.js** which is the input data for the application.

## Application Walkthrough

The main page for the application shows the list of academies in a panel on page load.

The academies are sorted in descending order with respect to the number of **defective devices** in each academy.

_The above completes the first objective_

On selecting an academy from the list, the panel to the right is populated with device names related to the academy selected.

The devices are also sorted in the descending order with respect to their **daily average**.

_The above completes the second objective_

On selecting a device, a full-screen modal opens with a chart displaying all of the device's battery data. A column next to the chart displays the same data in an accessible format.

All entries are color-coded and labelled to help with accessibility. A help button on the bottom-right of the main page details the same steps as above.

## Assumptions

A few assumptions were made during the development process:

-   Devices with too few data points were skipped as the results would have been erroneous.
-   The application has been structured assuming future enhancements with minimal breaking changes needed.
-   The project assumes atleast the last 2 versions of Chrome running as set in the _package.json_ file.
-   The employee data was ignored as it was not important for calculation as stated in the document.
-   Duplicate data points were skipped.
-   The _timestamp_ data point was trimmed down to minute range.

## Scope Reduction and Further Development

### Features to be added/improved

The following features were excluded due to their scope and time constraints:

1. End-to-end testing was left out due to tooling problems with Svelte.
2. Ability to filter the academies and devices by name and status.
3. Ability to filter chart view by different data points.
4. UX can be further improved for the chart page.
5. Help section needs more content.
6. Animations and transitions can be added for better UX.
7. Theme can be improved further using a proper design system.

### Further development

1. A complete end-to-end testing setup with proper tooling.
2. A design system to organise assets and styling guides.
3. Proper User case study with user flows, user personas, wireframes, mockups and prototypes.
4. Better responsiveness.
5. Better code optimization.
6. Further optimize the usage of external dependencies in the app.
