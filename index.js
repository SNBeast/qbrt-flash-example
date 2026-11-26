import packageApp from 'qbrt-flash';
import path from 'path';

const validPlatforms = ['windows', 'macos', 'linux'];
const validArchitectures = ['ia32', 'x64', 'armv7l'];

const platform = process.argv[2];
const arch = process.argv[3];

if (!platform || !validPlatforms.includes(platform)) {
    throw new Error(`A platform must be specified. Valid options: ${validPlatforms.join(', ')}`);
}

if (!arch || !validArchitectures.includes(arch)) {
    throw new Error(`An architecture must be specified. Valid options: ${validArchitectures.join(', ')}`);
}

packageApp(path.join(import.meta.dirname, 'app'), platform, arch);
