import { ElementRef, ReactNode, forwardRef } from 'react';
import { View, Pressable, StyleProp, ViewStyle, PressableProps } from 'react-native';

import { cn } from '../utils';
import { UIView } from '../ui-view';

export type UIPressableProps = Omit<PressableProps, 'style' | 'children'> & {
  as?: typeof UIView;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const UIPressable = forwardRef<View, UIPressableProps>(function UIPressable({ as, ...props }, ref) {
  const Container = (as || Pressable) as typeof Pressable;

  return (
    <Container
      ref={ref}
      {...props}
      className={cn(
        'outline-none outline-0',
        props.disabled && '!pointer-events-auto cursor-not-allowed',
        props.className,
      )}
    />
  );
});

export type UIPressable = ElementRef<typeof UIPressable>;
