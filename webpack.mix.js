const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/backoffice.js', 'public/js/backoffice.js')
    .sass('resources/sass/backoffice.scss', 'public/css')
    .styles('resources/css/backoffice.css', 'public/css/backoffice.css')
    .copyDirectory('resources/images', 'public/images');
