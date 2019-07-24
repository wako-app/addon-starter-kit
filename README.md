# FAQ

This is the starter kit to create your own add-on for [wako](https://wako.app). 

> ### What is an add-on?

An add-on, is an external script, that will add new features to wako. 
There are two kind of add-ons:
- The official ones, made by wako
- The unofficial ones, made by the communities. Be careful when installing third party add-ons, wako is not responsible about 
what these add-ons do.

For now, an add-on can add features on the Movie and Episode detail pages. 
An add-on can also be opened from the "Add-on Detail" page. From this you can create your own pages if you want to add extra features.

> ### How does it works?

wako is written in JavaScript using [Angular](https://angular.io) and [Ionic framework](https://ionicframework.com). 
To create your own add-on, the easiest way to do so is to clone this project and start writing your code.

All your code, needs to be written in `./projects/plugin/src/`.

The code in `./src`, it's only for dev purpose to simulate wako.


Your entry point will be `./projects/plugin/src/plugin/plugin.module.ts` where you defined the component you want to see in wako.



> ### Test your add-on

There are two way to test your add-on:
- `npm start`, will run behind the scene ng serve. This is the fastest way to test your add-on will you keep developing it
- `npm run start:wako-like`, this will build your add-on and the app will consume it like wako does. This is the recommended method
once you think your add-on is ready to publish. You can still edit your code this way, but it will take more time to refresh the page since the build process could be long


### Test your add-on on wako

Now that you think your add-on is completely finished, it's time to test it on your mobile. To do so, edit the file `package.json` and replace the `X.X.X.X` with your computer local IP.
Then run this command: `npm run serve:wako-like`. This will act exactly as `npm run start:wako-like` but will make the project accessible via any devices in your local network.
Then install the add-on inside wako via your manifest.json URL, like: `http://X.X.X.X:4200/assets/plugins/manifest.json` where `X.X.X.X` is your own IP address.
`
