import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const input = 'src/ExampleComponent.tsx';
const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

export default [
  {
    input,
    output: {
      name: 'ExampleComponent',
      file: pkg.main,
      format: 'umd',
      globals: { react: 'React', 'styled-components': 'styled' },
    },
    plugins: [terser(), typescript()],
    external,
  },
  {
    input,
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), typescript()],
    external,
  },
];
