import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.tsx', // Archivo principal
                'resources/js/Pages/Reportecitas.tsx', // Archivo específico
                // Agrega aquí otros archivos que necesites
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'), // Alias para importaciones
            'ziggy-js': path.resolve(__dirname, './vendor/tightenco/ziggy'), // Alias para Ziggy
        },
    },
});