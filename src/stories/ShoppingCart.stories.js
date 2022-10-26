import { View as ShoppingCart } from '../presentation/view/View';

export default {
  title: 'Mini-App/ShoppingCart',
  component: ShoppingCart,
};
const Template = (args) => <ShoppingCart {...args} />;

export const MainApp = Template.bind({});
MainApp.args = {
  dataIn: { styles: {} },
  dataLoad: { data: [] },
};
