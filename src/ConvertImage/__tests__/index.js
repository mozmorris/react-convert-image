/**
 *
 * Test for ConvertImage component
 *
 */

// Vendor
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

// App
import ConvertImage from '../';

const mockProps = {
  image: 'data:image/bmp;base64,abc123',
  onConversion() {},
};

// Setup component
const setup = (props = {}, method = mount) => {
  return method(
    <ConvertImage
      {...mockProps}
      {...props}
    />,
  );
};

describe('ConvertImage', () => {
  const getContext = window.HTMLCanvasElement.prototype.getContext;
  const drawImage = jest.fn();
  const getContextMock = () => ({ drawImage });

  beforeEach(() => {
    window.HTMLCanvasElement.prototype.getContext = getContextMock;
  });

  afterEach(() => {
    drawImage.mockReset();
    window.HTMLCanvasElement.prototype.getContext = getContext;
  });

  describe('render', () => {
    it('should render the', () => {
      const component = setup();

      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('onConversion', () => {
    it('should be called', () => {
      const onConversion = jest.fn();

      const component = setup({ onConversion });

      component.instance().convert();

      expect(onConversion).toHaveBeenCalled();
    });
  });
});
