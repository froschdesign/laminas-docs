import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://froschdesign.github.io',
    base: '/laminas-docs',
    output: 'static',
    vite: {
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo) => {
                        let extType = assetInfo.name.split('.').at(1);
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                            extType = 'img';
                        }
                        if (extType === 'css') {
                            return `css/styles.css`;
                        }
                        return `${extType}/[name][extname]`;
                    },
                    //entryFileNames: 'js/[name]-[hash].js',
                }
            }
        }
    }
});
