/** Keep internal image-crop tools out of the public deployment. */
import fs from 'node:fs';
fs.rmSync('dist/crop', { recursive: true, force: true });
console.log('Live build ready: public pages and assets retained; internal crop tool excluded.');
