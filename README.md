# Image gallery

[![CircleCI](https://circleci.com/gh/ysa23/image-gallery.svg?style=svg)](https://circleci.com/gh/ysa23/image-gallery)

An image gallery implemented with ReactJS (bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

## Prerequisites
* Node version > 8.10.0
* Yarn 1.10.0

## Run
```
yarn start
```

## Running tests
```
yarn test
```

## Challenges
The major challenge with this task was to handle the navigation in conjunction with Redux.
Eventually I chose to keep the navigation on a URL level and not to manage it in Redux, where in a more complex application I'll probably integrate these two to keep a coherent navigation stack.

Folder structure is an hybrid between type and feature folders, where for Redux I chose to keep the reducer in its own folder where the store is configured, while action creators are defined according to usage.

## Still missing
* Integration with eslint
* Storybook
* Transitions between the screens
* Tests for UI components (integration with Redux or splitting to smart and dump components)