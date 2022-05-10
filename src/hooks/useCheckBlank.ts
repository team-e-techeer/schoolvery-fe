import React from 'react';

interface parameter {
  e: React.FocusEvent<HTMLFormElement, Element>;
  ref: React.MutableRefObject<HTMLFormElement>;
  state: any;
}

export const useCheckBlank = ({ e, ref, state }: parameter) => {
  const select = ref.current?.querySelector<HTMLElement>(`#${e.target.name}`);
  if (select) {
    if (!state[e.target.name]) {
      select.style.display = 'block';
    } else {
      select.style.display = 'none';
    }
  }
};
