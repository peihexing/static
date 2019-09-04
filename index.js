const serve = require('serve');
const path = require('path');

const server = serve(path.join(__dirname, 'static'), {
    port: 18243
});