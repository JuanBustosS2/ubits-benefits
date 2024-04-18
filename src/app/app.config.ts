import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'ubits-benefits',
          appId: '1:848364795519:web:c34c83a9306dc90e99b14a',
          storageBucket: 'ubits-benefits.appspot.com',
          apiKey: 'AIzaSyByCyhhr76e0ZOeKr--50yPxokigtXLcGo',
          authDomain: 'ubits-benefits.firebaseapp.com',
          messagingSenderId: '848364795519',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
