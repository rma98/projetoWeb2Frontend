import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


// Importa os estilos globais
import './assets/styles/global.css';

// Importando o Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';
createApp(App)
    .use(router)
    .mount('#app')
