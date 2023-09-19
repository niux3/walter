import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import { terser } from "rollup-plugin-terser";
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';


let plugins = [
    resolve(),
    commonjs({
        include: 'node_modules/**',
    }),
    babel({
        exclude: 'node_modules/**',
    }),
    terser(),
    scss({
        output:'public/global.css',
        failOnError: true,
        watch: 'src/scss/',
        outputStyle: "compressed",
    })
];
if(process.argv.includes('dev')){
    plugins.splice(0, 0, livereload({
        verbose: true,
        port: 9000,
        delay: 500,
    }));
}

export default {
    input: 'src/js/index.js',
    output: {
        format: 'iife',
        file: 'public/app.js',
        name: 'app'
    },
    plugins:plugins
};
