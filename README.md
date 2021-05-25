# Image Processing API - Udacity Fullstack JS Nanodegree #

## Introduction ##

This is a simple REST API allowing users to create, access and resize placeholder images using the [Sharp](https://sharp.pixelplumbing.com/) Node.js image processing module.

---
## Getting Started ##

### Installing dependencies ###

After cloning the repo, all the project dependencies can be installed using npm:
```
npm install
```

### Running the server ###

To execute the application use the following command in terminal:

```
npm run start
```

the app will then be available on port 3000 by default, but that can be changed by editing the port constant value in the app.ts file.

### Scripts ###

The following actions can be executed through npm scripts:

#### Transpiling typescript to javascript ####

```
npm run build
```

The transpiled code will be available in the `build` folder.

#### Testing ####

A jasmine testing suite can be used to validate the endpoint as well as the imageTransform functionality.

```
npm run test
```

#### Formatting ####

The code can be automatically formatted using prettier. The formatting options can be customised by editin the `.prettierrc`file.

```
npm run prettier
```

#### Linting ####

The code can ba automatically linted using ESlint. Note that ESlint will also use prettier to test for incorrect formatting. Rules, plugins and extensions for ESlint can be modified through the `.eslintrc` file.

```
npm run lint
```
---
## How to use ##

The API offers one endpoint to access and resize images available in the `public/images/full` folder.

The endpoint is `api/images` and requires three query params:

| Query Param   | Value         |
| ------------- |:-------------:|
| filename      | the filename (without extension) of one of the images available in the folder |
| height        | it should be a positive integer      |
| width         | it should be a positive integer      |

Note that full instructions including a preview of all the available images and their filenames can be accessed using the main API endpoint. Assuming the app is running on port 3000 that would be:

[http://localhost:3000/api](http://localhost:3000/api)

An example of a correct endpoint call would be: 

[http://localhost:3000/api/images?filename=palmtunnel&height=250&width=220](http://localhost:3000/api/images?filename=palmtunnel&height=250&width=220)
