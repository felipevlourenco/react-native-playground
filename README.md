# React Native Playground

A sandbox for experimenting with [Expo](https://expo.dev) SDK 57 and React Native across iOS, Android, and web. It started from the Expo starter template and now includes extra screens and platform-specific UI, including a gesture playground.

Use the versioned Expo 57 docs when changing this project: [docs.expo.dev/versions/v57.0.0](https://docs.expo.dev/versions/v57.0.0/).

## Stack

| Piece | Version / notes |
| --- | --- |
| Expo | `~57.0.24` |
| React Native | `0.86.3` |
| React | `19.2.3` |
| Routing | [Expo Router](https://docs.expo.dev/router/introduction/) (file-based, typed routes) |
| Animation | `react-native-reanimated` 4.x |
| Gestures | `react-native-gesture-handler` plus RN responder APIs |
| Language | TypeScript (strict) |

Experiments enabled in `app.json`: **typed routes** and the **React Compiler**.

## Screens

Native apps use Expo Router [native tabs](https://docs.expo.dev/router/advanced/native-tabs/). Web uses a custom tab bar in `src/components/app-tabs.web.tsx`.

| Route | File | What it shows |
| --- | --- | --- |
| Home (`/`) | `src/app/index.tsx` | Welcome screen, animated Expo mark, and starter hints |
| Explore (`/explore`) | `src/app/explore.tsx` | Collapsible notes on routing, theming, images, and animation |
| Gesture (`/gesture`) | `src/app/gesture.tsx` | Drag a marker around the screen; it springs back on release |

The Gesture tab is registered on native (`src/components/app-tabs.tsx`). The web tab list currently links Home and Explore only.

## Project layout

```
src/
  app/                 # Expo Router screens (`_layout.tsx` is the root)
  components/          # Shared UI (platform files: `*.web.tsx`)
  constants/theme.ts   # Colors, spacing, fonts
  hooks/               # Color scheme and theme helpers
assets/                # Icons, splash, tab images
app.json               # Expo config (name, icons, plugins)
```

Import aliases (see `tsconfig.json`):

- `@/*` → `src/*`
- `@/assets/*` → `assets/*`

## Getting started

**Requirements:** Node.js **22.13+** (Expo SDK 57). Xcode 26.4+ for iOS; Android Studio with compile/target SDK 36 for Android.

```bash
npm install
npm start
```

That runs `expo start`. From the terminal:

- press `i` for the iOS simulator
- press `a` for an Android emulator
- press `w` for web

Or use the scripts:

```bash
npm run ios
npm run android
npm run web
```

You can also open a [development build](https://docs.expo.dev/develop/development-builds/introduction/), the [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/), an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/), or [Expo Go](https://expo.dev/go). Expo Go is a sandbox and does not cover every native API.

### Dev menu

- iOS simulator: `Cmd+D`
- Android emulator: `Cmd+M` / `Ctrl+M`
- Physical device: shake the device, or press `m` in the Expo CLI
- Web: browser DevTools

## Scripts

| Script | Command |
| --- | --- |
| `npm start` | Start Metro / Expo CLI |
| `npm run ios` | Start and open iOS |
| `npm run android` | Start and open Android |
| `npm run web` | Start and open web |
| `npm run lint` | Run Expo ESLint (`expo lint`) |
| `npm run reset-project` | Move `src` and `scripts` aside and leave a blank `src/app` |

`reset-project` is destructive. Only run it if you want a empty Expo Router app instead of this playground.

## How to extend it

1. Add a screen under `src/app/` (for example `src/app/foo.tsx` → `/foo`).
2. Register it in `src/components/app-tabs.tsx` (native) and, if it should appear on web, in `src/components/app-tabs.web.tsx`.
3. Reuse `ThemedText` / `ThemedView` and tokens in `src/constants/theme.ts` so light and dark mode stay consistent.

Root layout lives in `src/app/_layout.tsx`. It applies the system color scheme, shows the animated splash overlay, then mounts the tab navigator.

## Learn more

- [Expo SDK 57 reference](https://docs.expo.dev/versions/v57.0.0/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Using TypeScript](https://docs.expo.dev/guides/typescript/)
- [Color themes](https://docs.expo.dev/develop/user-interface/color-themes/)

## License

MIT (Expo starter license; see `LICENSE`).
