import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShoppingCart } from '../index';
import { dummyData } from '../constants/dummyData';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mini App/ShoppingCart',
  component: ShoppingCart,
} as ComponentMeta<typeof ShoppingCart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShoppingCart> = (args) => (
  <ShoppingCart {...args} />
);

export const ShoppingCartView = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ShoppingCartView.args = {
  dataLoad: {
    products: dummyData,
  },
  dataIn: {
    currency: 'PHP',
    containerStyle: {
      minWidth: '500px',

      minHeight: '500px',
      height: 'auto',
    },
  },
  dataOut: (arg0: any) => void,
};
