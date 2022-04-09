import ChattingPage from './ChattingPage';

export default {
  title: 'Page/ChattingPage',
  component: ChattingPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => <ChattingPage />;

export const Init = Template.bind({});
