GIFT Data Portal. GIFT is Global Initiative on Fiscal Transparency.

<div align="center">
  
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/datopian/gift-portal/issues)
![gift-portal](https://github.com/datopian/gift-portal/workflows/gift-portal/badge.svg)
[![The MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

</div>

# Developers

This site is built using Next.JS and Portal.JS.

## Getting Started

<br/>

### Environment

To run this app will require an `.env` file with following keys:

```
NEXT_PUBLIC_ORG_NAME= Github Organization login name (Same as the one that you created the token)

PRIVATE_KEY= Private Key to generate authorization token to communicate with giftless

GIFTLESS_SERVER= URL from giftless server

APP_GITHUB_KEY= API key to access github required data, follow this documentation: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token

REFRESH_DATA_IN_METASTORE= Set if the metastore data will refresh automatically (true/false)

//This env should be enabled when you want to mock the service worker to run tests
NEXT_PUBLIC_API_MOCKING= enabled/disabled

// To get those information below you can check on this link: https://docs.github.com/en/developers/apps/creating-a-github-app

GITHUB_CLIENT_ID= Github Client Id from APP

GITHUB_CLIENT_SECRET= Github Client Secret

SIGNING_KEY= Sigin KEY to use on APP from Github 

NEXTAUTH_URL= Github Login callback URL
``` 
<br />

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## E2E Test

To test the app end to end using cypress:

```bash
yarn e2e
# or
npm run e2e
```

## Unit Tests

The unit tests are using jest.  
To add more tests you should follow the structure to add new ones inside `__tests__` directory.  
To run tests you can run with the following commands:  
<br />

> Just run the tests

```bash
npm run test
# or
yarn test
```

<br />

> Run Tests with hot reload

```bash
npm run test:watch
# or
yarn test:watch
```

<br />

## Integration and E2E Tests

Those tests are made using Cypress. 
To add more tests you can follow the structure on the `cypress` directory.

- If you will update any view or change the workflow, ensure that the tests will run correctly.
- If you will need to mock some Server Side request that will not working on `cy.intercept` you can add on `mocks/handlers` folder. (We use [MSW](https://mswjs.io/) )

To run Cypress, you can use following commands:

> Run cypress UI

```bash
npm run cypress:open
# or
yarn cypress:open
```

> Tests without Video Interface

```bash
npm run cypress:ci
# or
yarn cypress:ci
```

> Run All tests

```bash
npm run e2e
# or
yarn e2e
```
 
<br />  

## Updating the Publisher

To update the Publisher app for `gift-portal` :

```bash
// clone the gift-publisher repo

$ git clone https://github.com/datopian/gift-publisher.git

// checkout to npmpackage branch

$ git checkout origin npmpackage

```

All update which are to be reflected in `gift-portal` publisher app should be done in branch `npmpackage` of `gift-publisher` and also make sure no `css`
is included. Hence, if the new update actually need css styling, work on the `master` branch to test the styling.

Once the styling is done, copy the new update to `npmpackage` branch excluding the css and then publish to npm. To infuse into `gift-portal`:

1. Update the `giftpub` version in the `package.json`
2. run `yarn` to install the new update
3. to make sure your css reflect in `gift-portal` copy all styling into `styles/pub.css`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

<br />

## User Cookie

After you log using Github, you can access the user information encrypted inside a cookie

The object that is stored follows the scope below: 

```json
{
  "user": {
    "name": "John Doe",
    "email": "johndoe@email.com",
    "image": "https://avatars3.githubusercontent.com/u/1111111?v=4",
    "login": "johndoe",
    "token": {
      "provider": "github",
      "type": "oauth",
      "id": 1122345412,
      "accessToken": "222db22ba22f2b2bdb2ef22222fa2e2c0a223567",
      "accessTokenExpires": null
    }
  }
}
```