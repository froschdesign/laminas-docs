import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const extScripts = [
    {
        entry: path.resolve(__dirname, 'src/scripts/main.js'),
        fileName: 'js/scripts'
    }
];

extScripts.forEach(async (scr) => {
    await build({
        build: {
            minify: 'terser',
            outDir: './dist',
            lib: {
                ...scr,
                formats: ['iife'],
                name: 'scripts',
                fileName: function () {
                    return `${scr.fileName}.js`;
                }
            },
            emptyOutDir: false
        },
        configFile: false
    });
});
