import LoginPage from './LoginPage';

export default {
  title: 'Page/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => <LoginPage />;

export const Init = Template.bind({});
