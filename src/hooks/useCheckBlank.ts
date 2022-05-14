import React from 'react';

interface parameter {
  e: React.FocusEvent<HTMLFormElement, Element>;
  ref: React.MutableRefObject<HTMLFormElement>;
  state: any;
}

export const useCheckBlank = ({ e, ref, state }: parameter) => {
  const isHaveTarget = () => Boolean(state[e.target.name]);

  const select = ref.current?.querySelector<HTMLElement>(`#${e.target.name}`) as HTMLElement;
  if (isHaveTarget()) return (select.style.display = 'none');
  select.style.display = 'block';
};
