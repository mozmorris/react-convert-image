# react-convert-image

A quick proof-of-concept React component for image format conversion. Currently converts to WebP. Browser capability dependent.

<a href="http://www.mozmorris.com/react-convert-image/">Click here to see an example implementation.</a>

## Installation

```
npm install react-convert-image
```

## Usage

```javascript
import React from "react";
import ConvertImage from "react-convert-image";

class Component extends React.Component {
  handleConvertedImage(url) {
    console.log(url);
  }

  render() {
    return (
      <ConvertImage
        image="hello-world.jpg"
        onConversion={this.handleConvertedImage}
      />
    );
  }
}
```

### Props

| prop              | type     | description                                                                |
| ----------------- | -------- | -------------------------------------------------------------------------- |
| image             | string   | Path to image or data URL                                                  |
| onConversion      | function | Called with base64 data URL of converted image                             |

## License

MIT
