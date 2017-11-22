import babel from 'rollup-plugin-babel';
import cli from 'rollup-plugin-cli';

export default {
    input: 'src/main.js',
    output: {
        file: 'build/kuaikuai.js',
        format: 'cjs',
    },
    plugins: [
        babel(),
        cli()
    ]
}