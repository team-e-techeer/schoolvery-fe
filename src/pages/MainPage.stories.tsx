import MainPage from './MainPage';

export default {
  title: 'Page/MainPage',
  component: MainPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => <MainPage />;

export const Init = Template.bind({});
