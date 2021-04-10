import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const input = 'src/ExampleComponent.tsx';
const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

const plugins = [terser(), typescript()];

export default [
  {
    input,
    output: {
      name: 'ExampleComponent',
      file: pkg.main,
      format: 'umd',
      globals: { react: 'React', 'styled-components': 'styled' },
    },
    plugins,
    external,
  },
];
