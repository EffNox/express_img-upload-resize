const app = require('express')();
const STORAGE = require('./middlewares/storage');
const imgResize = require('./helpers/img-resize');

const port = 3987;

app.post('/upload', [STORAGE], ({ file }, rs) => {
    imgResize({ ...file, filename: `0_xs-${file.filename}`, size: 50 });
    imgResize({ ...file, filename: `1_sm-${file.filename}`, size: 250 });
    imgResize({ ...file, filename: `2_md-${file.filename}`, size: 500 });
    imgResize({ ...file, filename: `3_lg-${file.filename}`, size: 1000 });
    imgResize({ ...file, filename: `4_xl-${file.filename}`, size: 1500 });
    rs.send({ file });
});

app.listen(port, () => console.log(`http://localhost:${port}`));
