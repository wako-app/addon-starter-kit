# FAQ

This is the starter kit to create your own add-on for [wako](https://wako.app).


## What is an add-on?

An add-on, is an external script you install inside wako to add new features.
There are two kind of add-ons:
- Officials, made by the wako team.
- The unofficial ones, made by the community.

**Be careful when installing third party add-ons, wako is not responsible for what these add-ons do.**

## What the add-on can do?

An add-on can have 4 different actions:
- movies
- episodes
- episodes-item-option
- shows

These actions are defined in the [plugin's manifest](https://github.com/wako-app/addon-starter-kit/blob/master/projects/plugin/src/manifest.json#L8).

When a user browses a movie detail page for example, wako will load all the add-ons with action `movies` and
will call them with the current [Movie](https://github.com/wako-app/mobile-sdk/blob/master/src/entities/movie.ts) object.
It does the same for the other 3 actions. Then you have all the metadata of the current page and can do whatever you want.
For example here, when a user is on the TV Shows detail page, we will display a button to play the trailer of the TV show on Kodi.
  
In addition you can manage a page for the settings of your add-on and a page for its details (if you want to add more features).

As wako is made in JavaScript, it is quite possible to modify the content of the pages and their appearance.

## Getting started?

wako is written in JavaScript using [Angular](https://angular.io) and [Ionic framework](https://ionicframework.com).
To create your own add-on, the easiest way to do so is to clone this project and start writing your code.

All your code, needs to be written in `./projects/plugin/src/`.

The code in `./src`, it's only for dev purpose to simulate wako and test your add-on.

Your entry point will be `./projects/plugin/src/plugin/plugin.module.ts` where you defined the component you want to load in wako.

## Test your add-on on your computer

There are two ways to test your add-on:

- `npm start`, will run behind the scene `ng serve`. This is the fastest way to develop your add-on. Then open `http://localhost:4200`
- `npm run start:wako-like`, this will build your add-on in production mode and the app will consume it like wako does. This is the recommended method to use once your add-on is ready to be published.  Then open `http://X.X.X.X:4200` where `X.X.X.X` is your computer's IP address.


## Test your add-on on your phone

Now that your add-on is ready to be published, it's time to test it on wako on your device. 
1- Run `npm run start:wako-like`, verify you can access with your browser to `http://X.X.X.X:4200/assets/plugins/manifest.json` where `X.X.X.X` is your computer's IP address.
2- Open wako, go to settings > add-ons > install a third party add-on. Enter the above URL (`http://X.X.X.X:4200/assets/plugins/manifest.json`).
3- Enjoy.

When you're making changes in your code, you'll have to uninstall and install the plugin again to refresh changes into wako. 
This could be cumbersome. 
To avoid having to do that, enable debug mode in wako. Go into settings and click at least 8 times on the app version. 
You'll now have access to developer options where you can enable the "Show Reload Button" for add-ons. 
Each time you click on it, wako will reinstall all the installed add-ons for you and reload the page


## Publish your add-on

Once your add-on is ready, run `npm run build`. Host the `dist` directory somewhere and share the `manifest.json`'s URL.
The easiest way, is to commit the `dist` directory and push everything on github to share your manifest, i.e: `https://raw.githubusercontent.com/wako-app/addon-starter-kit/master/projects/plugin/src/manifest.json`
