import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          brand: '#aed581',
        },
        variables: {
          customPrimary: '#1976D2',
          customSecondary: '#424242',
          'type-step-minus-2': 'clamp(0.7813rem, 0.7747rem + 0.0326vi, 0.8rem)',
          'type-step-minus-1': 'clamp(0.9375rem, 0.9158rem + 0.1087vi, 1rem)',
          'type-step-0': 'clamp(1.125rem, 1.0815rem + 0.2174vi, 1.25rem)',
          'type-step-1': 'clamp(1.35rem, 1.2761rem + 0.3696vi, 1.5625rem)',
          'type-step-2': 'clamp(1.62rem, 1.5041rem + 0.5793vi, 1.9531rem)',
          'type-step-3': 'clamp(1.944rem, 1.771rem + 0.8651vi, 2.4414rem)',
          'type-step-4': 'clamp(2.3328rem, 2.0827rem + 1.2504vi, 3.0518rem)',
          'type-step-5': 'clamp(2.7994rem, 2.4462rem + 1.7658vi, 3.8147rem)',
        },
      },
    },
    options: {
      customProperties: true,
    },
    typography: {
      defaultFontFamily: 'Lora, serif',
    },
  },
});
