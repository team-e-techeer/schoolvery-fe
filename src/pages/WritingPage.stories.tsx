import WritingPage from './WritingPage';

export default {
  title: 'Page/WritingPage',
  component: WritingPage,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => <WritingPage />;

export const Init = Template.bind({});
