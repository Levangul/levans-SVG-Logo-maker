const generateSVG = require("../lib/generateSVG");

describe("generateSVG", () => {
  it("should generate a circle SVG", () => {
    const text = "LEV";
    const textColor = "black";
    const shapeColor = "red";
    const shape = "Circle";
    const templateTest = `<svg version="1.1" width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
    const svg = generateSVG({ shape, text, textColor, shapeColor });

    expect(svg).toEqual(templateTest);
  });
  it("should generate a square SVG", () => {
    const text = "LEV";
    const textColor = "black";
    const shapeColor = "red";
    const shape = "Square";
    const templateTest = `<svg version="1.1" width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="${shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>   
    </svg>`;
    const svg = generateSVG({ shape, text, textColor, shapeColor });

    expect(svg).toEqual(templateTest);
  });
  it("should generate a triangle SVG", () => {
    const text = "LEV";
    const textColor = "black";
    const shapeColor = "red";
    const shape = "Triangle";
    const templateTest = `<svg version="1.1" width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

    const svg = generateSVG({ shape, text, textColor, shapeColor });

    expect(svg).toEqual(templateTest);
  });
});
