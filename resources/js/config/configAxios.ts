import axios from 'axios';

// Obtener el token CSRF desde la metaetiqueta
const csrfToken = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.getAttribute('content');

if (csrfToken) {
    // Configurar Axios para incluir el token CSRF en todas las solicitudes
    console.log(csrfToken); 
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
} else {
    console.error('CSRF token not found');
}

export default axios;
