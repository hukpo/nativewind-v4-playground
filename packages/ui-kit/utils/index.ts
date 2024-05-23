import { extendTailwindMerge } from 'tailwind-merge';
import { type VariantProps as CVAVariantProps } from 'class-variance-authority';

import { fontSize } from '../preset';

export const cn = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: Object.keys(fontSize) }],
  },
});

export type VariantProps<T extends (...args: any) => any, VP = CVAVariantProps<T>> = {
  [Key in keyof VP]: NonNullable<VP[Key]>;
};

export { cva as cv } from 'class-variance-authority';
