import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

interface Parameter {
  node: any;
  onChange: (value: any) => void;
}

export const RecoilObserver = ({ node, onChange }: Parameter) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};
