import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const primeVueOptions = {
  theme: {
    preset: definePreset(Aura, {
      semantic: {
        primary: {
          50: '{blue.50}',
          100: '{blue.100}',
          200: '{blue.200}',
          300: '{blue.300}',
          400: '{blue.400}',
          500: '{blue.500}',
          600: '{blue.600}',
          700: '{blue.700}',
          800: '{blue.800}',
          900: '{blue.900}',
          950: '{blue.950}',
        },
      },
    }),
  },
};

createApp(App).use(router).use(PrimeVue, primeVueOptions).mount('#app');
