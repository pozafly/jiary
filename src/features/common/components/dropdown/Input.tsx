import * as style from '@/features/common/components/dropdown/Dropdown.css.ts';
import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { DropdownContext } from '@/features/common/components/dropdown/Dropdown.tsx';

type InputProps = {
  maxLength?: number;
  requiredText?: string;
};

export default function Input({
  maxLength,
  requiredText = undefined,
}: InputProps) {
  const { inputs } = useContext(DropdownContext);
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current as HTMLInputElement | null;
    input?.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputs?.setInputValue(e.target.value);
    if (!requiredText) {
      return;
    }
    const input = inputRef.current as HTMLInputElement | null;
    setIsValid(!!input?.value);
  };

  return (
    <>
      <input
        className={style.input}
        type="text"
        maxLength={maxLength}
        value={inputs?.inputValue || ''}
        onChange={handleChange}
        ref={inputRef}
      />
      {!isValid && <span className={style.requiredText}>{requiredText}</span>}
    </>
  );
}
