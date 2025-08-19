import type { InputHTMLAttributes } from 'react';
import classNameMerge from '../../utils/classNameMerge';

interface BasicInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  className?: string;
  error?: boolean;
}

export default function BasicInput({ 
  className, 
  error = false, 
  ...props 
}: BasicInputProps) {
  return (
    <input
      {...props}
      className={classNameMerge([
        'w-full rounded-lg border px-3 py-2 text-sm placeholder:text-gray-400',
        'focus:outline-none focus:ring-2 focus:ring-black/20',
        error 
          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
          : 'border-gray-300 focus:border-black',
        className
      ])}
    />
  );
}
