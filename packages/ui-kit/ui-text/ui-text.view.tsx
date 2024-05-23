import { Text, TextProps } from 'react-native';

import { VariantProps, cn, cv } from '../utils';

const text = cv('text-foreground text-base', {
  variants: {
    variant: {
      label: 'text-medium font-semibold',
    },
  },
});

const headings = { h1: '1', h2: '2', h3: '3', h4: '4', h5: '5' };

export type UITextProps = TextProps &
  VariantProps<typeof text> & {
    as?: keyof typeof headings;
  };

export const UIText = ({ as, variant, ...props }: UITextProps) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      className={cn(text({ variant }), props.className)}
      role={as && headings[as] ? 'heading' : undefined}
      aria-label={as && headings[as] ? headings[as] : undefined}
    />
  );
};
