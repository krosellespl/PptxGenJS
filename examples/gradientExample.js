const pptx = require('pptxgenjs');

const slide = pptx.addNewSlide('MASTER_SLIDE');

slide.addText('Gradient Test', templates.get('SLIDE_CONTENT.layout.title'));

// add a rectangle with a linear gradient going at at 45 degree angle and 3 colors
slide.addShape(pptx.shapes.RECTANGLE, {
    x: 6.22,
    y: 4.54,
    w: 2,
    h: 2,
    fill: {
        type: 'gradient',
        gradientType: 'linear',
        stops: [
            {color: 'EC008C', position: 100000}, // percent * 1000 where the color should be in the gradient
            {color: '005880', position: 80000},
            {color: 'F56A00', position: 5000}
        ],
        angle: 45
    }
});

// circle with a line border which is a gradient
slide.addShape(pptx.shapes.OVAL, {
    x: 0.3,
    y: 4.54,
    w: 2,
    h: 2,
    lineSize: 4,
    line: {
        type: 'gradient',
        gradientType: 'linear', // linear, radial
        stops: [
            {color: 'EC008C', position: 100000}, // position is % in ppt
            {color: 'F56A00', position: 0} // position is % in ppt
        ],
        angle: 45 // for linear. For radial maybe just match to closest one, and if undefined use the centered radial
    }
});