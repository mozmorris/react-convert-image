# react-convert-image

React component for image format conversion. Currently converts to WebP. Browser capability dependent.

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

| prop              | type     | required | default  | description                                                                     |
| ----------------- | -------- | -------- | -------- | ------------------------------------------------------------------------------- |
| image             | string   | Yes      |          | Path to image or data URL                                                       |
| onConversion      | function | Yes      |          | Called with base64 data URL of converted image                                  |
| format            | string   | No       | webp     | Target image format e.g 'webp', 'jpeg', 'png'                                   |
| quality           | number   | No       | 0.92     | A Number between 0 and 1 indicating image quality if the format is jpeg or webp |

## License

MIT
