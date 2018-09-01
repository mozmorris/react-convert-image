/**
 *
 * ConvertImage module
 *
 */

// Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConvertImage extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    format: PropTypes.oneOf(['webp', 'jpeg', 'png']),
    onConversion: PropTypes.func.isRequired,
    quality: PropTypes.number,
  };

  static defaultProps = {
    format: 'webp',
    quality: 0.92,
  };

  state = {
    convertedImage: undefined,
  };

  componentDidMount() {
    this.node.addEventListener('load', this.convert);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.image !== this.state.convertedImage;
  }

  setRef = (node) => {
    this.node = node;
  };

  convert = () => {
    const { props: { onConversion, format, quality } } = this;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = this.node.naturalWidth;
    canvas.height = this.node.naturalHeight;
    ctx.drawImage(this.node, 0, 0);

    const convertedImage = canvas.toDataURL(`image/${format}`, quality);

    this.setState({ convertedImage }, () => onConversion(convertedImage));
  };

  render() {
    const { props: { image } } = this;

    return (
      <img ref={this.setRef} src={image} />
    );
  }
}

export default ConvertImage;
