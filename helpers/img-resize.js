const sharp = require('sharp');

module.exports = ({ path, filename, size }) => {
    return sharp(path).resize(size).toFile(`./uploads/${filename}`);
}
