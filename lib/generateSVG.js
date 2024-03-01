class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }
  render() {
    return `<svg version="1.1" width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>   
    </svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }
  render() {
    return `<svg version="1.1" width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

const shapeFactory = (shape, text, textColor, shapeColor) => {
  switch (shape) {
    case "Circle":
      return new Circle(text, textColor, shapeColor);
    case "Square":
      return new Square(text, textColor, shapeColor);
    case "Triangle":
      return new Triangle(text, textColor, shapeColor);
    default:
      throw new Error("Invalid shape type");
  }
};

const generateSVG = ({ shape, text, textColor, shapeColor }) => {
  const genShape = shapeFactory(shape, text, textColor, shapeColor);
  return genShape.render();
};

module.exports = generateSVG;
