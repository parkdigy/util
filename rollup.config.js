import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

const externalDeps = Object.keys(packageJson.dependencies || {}).concat(
  Object.keys(packageJson.peerDependencies || {})
);

const getOutput = (path, format) => ({
  file: path,
  format: format,
  sourcemap: false,
  compact: true,
  exports: 'named',
});

const getConfig = () => ({
  input: 'src/index.ts',
  output: [getOutput(packageJson.main, 'cjs'), getOutput(packageJson.module, 'esm')],
  external: externalDeps,
  context: 'window',
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['./src/**/*.{ts,tsx}'],
    }),
    del({ targets: 'dist/*' }),
    peerDepsExternal(),
    postcss(),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    // *.private 디렉토리, *.private.d.ts 파일 제거
    {
      name: 'remove-d-ts-plugin',
      generateBundle() {
        const removeFromDir = (dir) => {
          const files = fs.readdirSync(dir);
          files.forEach((file) => {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
              if (filePath.endsWith('.private')) {
                fs.rmSync(filePath, { recursive: true, force: true });
              } else {
                removeFromDir(filePath);
              }
            } else {
              filePath.endsWith('.private.d.ts') && fs.unlinkSync(filePath);
            }
          });
        };
        removeFromDir('./dist');
      },
    },
  ],
});

export default [getConfig()];
