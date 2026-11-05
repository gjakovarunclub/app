# Gjakova Run Club — iOS & Android

A bilingual mobile app built with Expo and React Native. The interface is available in English and German; change the language from **Profile → App preferences**.

## Run the app

1. Install Node.js LTS.
2. Run `npm install` in the project directory.
3. Run `npx expo start` and scan the QR code using Expo Go, or launch an available iOS/Android simulator with `npm run ios` / `npm run android`.

## Included in this app prototype

- Four mobile sections: Home, Events, Community and Profile.
- English/German interface, including event labels and controls.
- Interactive June 2026 calendar, sample event details, and local saved-interest list.
- Member dashboard, membership application form with basic input validation, and local status.
- Gallery layout, Instagram and Strava links, app sharing, and a local reminder preference.
- Responsive React Native screens for iOS and Android.

## Important before launch

This repository does not yet provide a club API or confirmed event schedule. Calendar events and locations in the app are clearly marked as samples and must be replaced with approved club information. Gallery images are remote illustrative stock photos and should be replaced with club-owned images and appropriate usage rights.

This frontend prototype does not implement a server, account authentication, delivery of membership applications, persistent storage, actual push notifications, live Strava integration, or store-ready signing/builds. The membership form and RSVP only update local app state. The reminder switch is a preference UI, not a notification subscription. Add a secure backend and the club's verified data before collecting personal details or publishing. Expo development builds/EAS and Apple/Google developer accounts are needed to create production store releases.

## App metadata

The Expo app configuration uses the package identifiers `org.gjakovarunclub.app` for iOS and Android. Confirm that these identifiers are available and owned by the publisher before store submission.
