import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface Field {
  value?: string;
  onChange: (value?: string | React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  setValue: Dispatch<SetStateAction<string>>;
}

export function useField(initial = ''): Field {
  const [value, setValue] = useState<string>(initial);
  const onChange = useCallback(({ target }) => setValue(target?.value), []);
  const reset = useCallback(() => setValue(initial), [initial]);

  return { value, onChange, reset, setValue };
}
