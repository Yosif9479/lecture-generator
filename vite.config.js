﻿import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: [
                'index.html',
                'create.html',
                'edit.html'
            ]
        }
    }
})