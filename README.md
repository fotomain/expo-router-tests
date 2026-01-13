# ███ Welcome to Coolest React Expo Template

react 19 expo best simple app record video on web
https://developer.android.com/reference/android/Manifest.permission

expo start --web

taskkill /f /im node.exe
npm cache clean --force

# ████████████ error props.pointerEvents is deprecated. Use style.pointerEvents

============== OLD
supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style];
============== NEW
const pointerEvents = supportedProps.pointerEvents;
delete supportedProps.pointerEvents;
supportedProps.style = [{ pointerEvents }, styles.view$raw, hasTextAncestor && styles.inline, props.style];

# ████████████ start Drawer

npx expo install @react-navigation/drawer react-native-reanimated react-native-worklets

# ████████████ error

react-native-vision-camera error useCameraDevice("back" get constants of null

# ████████████ 2 steps - RUN ON device - android + iphone ██████████

1)

expo run:android
FAILS, then run 2nd

2)

npx expo start -c --tunnel

expo prebuild --no-install --clean

    expo run:android

SwiperDemo
SwiperWeb
SwiperNative
Swiper Controls

react-native-paper
expo start --web
expo run:android
expo run:ios

# ████████████ CAMERA ██████████

EAS project 530fe4e6-4349-44bf-9ad0-23b7b387a571

https://github.com/WAKU-TAKE-A/ReactNativeVisionCameraApp
sudo killall node

npx expo install react-native-vision-camera
npm install expo-barcode-scanner
npx expo install expo-media-library
npx expo install expo-file-system

# ████████████ INSTALL ██████████

eslint v8.57.1

expo install @expo/vector-icons

https://callstack.github.io/react-native-paper/docs/guides/getting-started/
npm install react-native-safe-area-context

+ in files

npm i react-native-web-swiper
npm i react-native-draggable-flatlist
npm i react-native-swipeable-item
npm i uuid
npm i expo-clipboard

npm i yarn;  
yarn add react-native-reanimated-carousel;
yarn add expo-linear-gradient
npm i react-native-paper-dropdown

ref for react 19
"react-native-reanimated-carousel": "^5.0.0-beta",

how to use google material icons font in react expo

## ████████████ PATCH ██████████

C:\Users\localadmin\WebstormProjects\w1\node_modules\react-native-reanimated\lib\module\common

const config = global.__reanimatedLoggerConfig;
if (!config?.level) return;

## █████████████████████████████

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/fotomain/expo-w1.git
git push -u origin main

## █████████████ ICONS FOR TABS ██████

          if (route.name === "Home") {
            IconComponent = Ionicons
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "Settings") {
            IconComponent = MaterialIcons
            iconName = focused ? "settings" : "settings"
          } else if (route.name === "Profile") {
            IconComponent = Ionicons
            iconName = focused ? "person" : "person-outline"
          } else if (route.name === "Favorites") {
            IconComponent = MaterialIcons
            iconName = focused ? "favorite" : "favorite-border"
          }

## █████████████ INTENT DOC ██████

see
https://github.com/fotomain/expo-w1-intent

## █████████████ COOL DOC ██████

draggable-flatlist-examples
+Swipable
https://snack.expo.dev/@computerjazz/draggable-flatlist-examples

Drawer
https://reactnavigation.org/docs/drawer-based-navigation/

icons https://oblador.github.io/react-native-vector-icons/

https://www.npmjs.com/package/react-native-swiper-flatlist

## █████████████████████████████

> The latest and greatest boilerplate for Infinite Red opinions

This is the boilerplate that [Infinite Red](https://infinite.red) uses as a way to test
bleeding-edge changes to our
React Native stack.

- [Quick start documentation](https://github.com/infinitered/ignite/blob/master/docs/boilerplate/Boilerplate.md)
- [Full documentation](https://github.com/infinitered/ignite/blob/master/docs/README.md)

## Getting Started ===

To make things work on your local simulator, or on your phone, you need first to [run
`eas build`](https://github.com/infinitered/ignite/blob/master/docs/expo/EAS.md). We have many
shortcuts on
`package.json` to make it easier:

```bash
yarn build:ios:sim # build for ios simulator
yarn build:ios:device # build for ios device
yarn build:ios:prod # build for ios device
```

### `./assets` directory

This directory is designed to organize and store various assets, making it easy for you to manage
and use them in your
application. The assets are further categorized into subdirectories, including `icons` and `images`:

```tree
assets
├── icons
└── images
```

**icons**
This is where your icon assets will live. These icons can be used for buttons, navigation elements,
or any other UI
components. The recommended format for icons is PNG, but other formats can be used as well.

Ignite comes with a built-in `Icon` component. You can find detailed usage instructions in
the [docs](https://github.com/infinitered/ignite/blob/master/docs/boilerplate/app/components/Icon.md).

**images**
This is where your images will live, such as background images, logos, or any other graphics. You
can use various
formats such as PNG, JPEG, or GIF for your images.

Another valuable built-in component within Ignite is the `AutoImage` component. You can find
detailed usage instructions
in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-AutoImage.md).

How to use your `icon` or `image` assets:

## Running Maestro end-to-end tests

Follow our [Maestro Setup](https://ignitecookbook.com/docs/recipes/MaestroSetup) recipe.

## Next Steps

### Ignite Cookbook

[Ignite Cookbook](https://ignitecookbook.com/) is an easy way for developers to browse and share
code snippets (or
“recipes”) that actually work.

### Upgrade Ignite boilerplate

Read our [Upgrade Guide](https://ignitecookbook.com/docs/recipes/UpdatingIgnite) to learn how to
upgrade your Ignite
project.

## Community

⭐️ Help us out by [starring on GitHub](https://github.com/infinitered/ignite), filing bug reports
in [issues](https://github.com/infinitered/ignite/issues)
or [ask questions](https://github.com/infinitered/ignite/discussions).

💬 Join us
on [Slack](https://join.slack.com/t/infiniteredcommunity/shared_invite/zt-1f137np4h-zPTq_CbaRFUOR_glUFs2UA)
to
discuss.

📰 Make our Editor-in-chief happy
by [reading the React Native Newsletter](https://reactnativenewsletter.com/).

echo "# expo-router-tests" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/fotomain/expo-router-tests.git
git push -u origin main