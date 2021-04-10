# react-micro-ui-cdn-based

This repo consists of two parts which ideally would be two separate repositories with separate build pipelines:

1. a main application or ui shell, located in 'shell'
2. an example component that will be used in the shell, located in 'example_component'

Typically you would just have to update the version and rebuild the main application anytime you make changes to sub-components but using some build tool magic we can circumvent this. We still use the ExampleComponent the same in our react application, except it isn't actually built into the main application. ExampleComponent will be loaded from a cdn so that whenever a new build is pushed through to the cdn for the component repository, the end-user will instantly (dependent on browser-caching/TTL) be able to see the changes.

## Running the example

Getting started is as easy as:

```bash
cd shell && npm i
npm run build:all
npm start
```

While the web server is running, try making some changes to the ExampleComponent and make a new build (in a different terminal window):

```bash
cd example_component
npm run build
```

Now refresh the page in your browser and you should see your changes.

## Todo

- Development process could be made better: hot reloading would be nice
