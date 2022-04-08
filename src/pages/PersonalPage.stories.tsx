import PersonalPage from './PersonalPage';

export default {
  title: 'Page/PersonalPage',
  component: PersonalPage,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => <PersonalPage />;

export const Init = Template.bind({});
