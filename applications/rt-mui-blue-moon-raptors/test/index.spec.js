import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import BirdCard from '../src/js/components/sections/birdCard';

describe('component tests', function () {
  describe('# birdCard tests', function () {
    it('should not render when no title is passed test', function () {
      const wrap = mount(<BirdCard />);
      const html = wrap.html();
      expect(!!html).to.equal(false);
    });
    it('should render when title is passed test', function () {
      const wrap = mount(<BirdCard title='title' />);
      const html = wrap.html();
      expect(html).to.equal('<h1>title</h1>');
    });
    it('should render with img tag when title and image is passed test', function () {
      const wrap = mount(<BirdCard image='imageSrc' title='title' />);
      const html = wrap.html();
      expect(html.indexOf('<h1>title</h1><img') !== -1).to.equal(true);
    });
  });
});
