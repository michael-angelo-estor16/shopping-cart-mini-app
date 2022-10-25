import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'testing' } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
};
