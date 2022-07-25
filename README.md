## Getting Started

###First make sure you have installed and setup adroid studio and node in your environment
###*Also Note that the project has been fully configured to run on android so please test using an android device or emulator

- Create a local.properties file under android directory and configure your sdk location there as seen in this example(For windows users like me :)
```bash
sdk.dir=C:\\Users\\bmwau\\AppData\\Local\\Android\\Sdk
```
- Find a link to the ui designs I created to help create the application quickly [Figma Designs For Elgoog.](https://www.figma.com/file/5AyRL3CZqyGN8fpf4ynUVF/WOWZI?node-id=0%3A1)


- Install dependencies by running:
```bash
npm install
# or
yarn install
```

- After dependencies have installed, start the react-native application by running:

```bash
npm run start
# or
yarn run start
```

- After application start is complete, run the project like this enuring that your emulator or physical device is attached/running:
```bash
npm run android
# or
yarn run android
```

After that, the application should be running on [http://localhost:8081](http://localhost:8081) which is the default port for react-native apps.
## PROJECT STRUCTURE
Under `src` folder, we have the following directories each performing different tasks:

### Pages
The pages directory contains the routes found in the app

### Components
The components directory contains all the reusable components for the app

### Containers
The containers directory contains the structure of the UI. It acts as a wrapper for the app.

### Redux
The redux directory contains the setup for redux and its reducers.

### Theme
The theme directory contains the styling guide for the whole project.

### Styles
The styles directory contains the styles used by different files in the app making them easy to find and maintain.

### Navigation
The navigation directory is where the routing of the different pages is handled.

### Api
The api directory is where http request are configured.

####Remarks
```bash
I hope you enjoy using and going through the app/code as much as I enjoyed creating it :)
```
