import { Meta, Story } from '@storybook/react';
import Header from './Header';
import type { Props } from './Header';
import { AiOutlineLeft as LeftIcon } from 'react-icons/ai';
import { IoIosNotifications as RightIcon } from 'react-icons/io';
import { css } from '@emotion/react';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [Story => <Story />],
} as Meta;

const Template: Story<Props> = args => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '안녕 대학교',
};

export const Before = Template.bind({});
Before.args = {
  title: '안녕 대학교',
  Left: () => (
    <div
      css={css`
        flex: 1;
        margin-left: 3rem;
      `}
    >
      <button
        css={css`
          border: none;
          cursor: pointer;
          padding: 1rem;
          &:focus {
            outline: none;
          }
        `}
        onClick={() => console.log('hi')}
      >
        <LeftIcon size={20} color="#fff" />
      </button>
    </div>
  ),
};

export const Notification = Template.bind({});
Notification.args = {
  title: '안녕 대학교',
  Left: () => (
    <div
      css={css`
        flex: 1;
        margin-left: 3rem;
      `}
    >
      <button
        css={css`
          border: none;
          cursor: pointer;
          padding: 1rem;
          &:focus {
            outline: none;
          }
        `}
        onClick={() => console.log('hi')}
      >
        <LeftIcon size={20} color="#fff" />
      </button>
    </div>
  ),
  Right: () => (
    <div
      css={css`
        margin-right: 3rem;
      `}
    >
      <button
        css={css`
          border: none;
          cursor: pointer;
          padding: 1rem;
          &:focus {
            outline: none;
          }
        `}
        onClick={() => console.log('hi')}
      >
        <RightIcon size={25} color="#fff" />
      </button>
    </div>
  ),
};
