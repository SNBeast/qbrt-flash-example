import packageApp from 'qbrt-flash';
import path from 'path';

const validPlatforms = ['win32', 'darwin', 'darwinLegacy'];

const platform = process.argv[2];

if (!platform || !validPlatforms.includes(platform)) {
    throw new Error(`A platform must be specified. Valid options: ${validPlatforms.join(', ')}`);
}

packageApp(path.join(import.meta.dirname, 'app'), platform);
