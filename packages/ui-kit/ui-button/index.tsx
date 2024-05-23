import { vars } from "nativewind";
import { forwardRef } from "react";

import { UIText } from "../ui-text";
import { VariantProps, cn, cv } from "../utils";
import { ThemeColor, useThemeColor } from "../theme";
import { UIPressable, UIPressableProps } from "../ui-pressable";

type Size = "default" | "small" | "large" | "icon";
type Variant =
  | "primary"
  | "action"
  | "ghost"
  | "outline"
  | "secondary"
  | "destructive";

export const theme = ({
  background,
  foreground,
  hoverBackground,
  hoverForeground,
}: {
  background: string;
  foreground: string;
  hoverBackground?: string;
  hoverForeground?: string;
}) => {
  const params: Parameters<typeof vars>[0] = {
    "--button": background,
    "--button-foreground": foreground,
    "--button-active": hoverBackground ?? background,
    "--button-active-foreground": hoverForeground ?? foreground,
  };

  return vars(params);
};

const container = cv(
  "group flex-row items-center justify-center rounded-md bg-button hover:bg-button-active active:bg-button-active",
  {
    variants: {
      variant: {
        primary:
          "[--button:--primary] [--button-active:--primary-active] [--button-foreground:--primary-foreground] [--button-active-foreground:--primary-foreground]",
        secondary:
          "[--button:--secondary] [--button-active:--secondary-active] [--button-foreground:--secondary-foreground] [--button-active-foreground:--secondary-foreground]",
        destructive:
          "[--button:--destructive] [--button-active:--destructive-active] [--button-foreground:--destructive-foreground] [--button-active-foreground:--destructive-foreground]",
        outline:
          "border border-ring [--button-active:--secondary-active] [--button-foreground:--secondary-foreground] [--button-active-foreground:--secondary-foreground] hover:border-foreground active:border-foreground",
        ghost:
          "[--button-foreground:--secondary-foreground] [--button-active-foreground:#626264]",
        action:
          "[--button-foreground:#000] [--button-active-foreground:#000] [--button:#FFDC03] [--button-active:#CFB200] web:[background:linear-gradient(to_bottom,#FFDC03,#FBB239)] web:hover:[background:#E39F37]",
      } satisfies Record<Variant, string>,
      size: {
        default: "min-h-[36px] px-2.5 py-1.5 gap-1.5",
        small: "min-h-[28px] px-1.5 py-1 gap-1.5",
        large: "min-h-[44px] px-5 py-2.5 gap-3",
        icon: "h-[36px] w-[36px]",
      } satisfies Record<Size, string>,
      disabled: {
        true: "[--button:--muted] [--button-active:--muted] [--button-foreground:--ring] [--button-active-foreground:--ring] border-button hover:border-button active:border-button web:[background:--button] web:hover:[background:--button]",
      },
    },
  }
);

const text = cv(
  "font-medium text-center text-button-foreground group-hover:text-button-active-foreground group-active:text-button-active-foreground",
  {
    variants: {
      size: {
        default: "",
        small: "",
        large: "text-medium",
        icon: "",
      } satisfies Record<Size, string>,
    },
  }
);

const iconSize = {
  small: 20,
  default: 20,
  large: 25,
  icon: 20,
} satisfies Record<Size, number>;

export type UIButtonProps = Omit<UIPressableProps, "children"> &
  VariantProps<typeof container> & {
    textClassName?: string;
    numberOfLines?: number;
    children?: string;
    iconScale?: number;
    iconAfterScale?: number;
    color?: ThemeColor;
  };

export const UIButton = forwardRef<UIPressable, UIButtonProps>(
  function UIButton(
    {
      numberOfLines,
      textClassName,
      children,
      disabled = false,
      variant,
      size = "default",
      color,
      iconScale = 1,
      iconAfterScale = iconScale,
      className,
      ...props
    },
    ref
  ) {
    const themeColor = useThemeColor(color);

    return (
      <UIPressable
        ref={ref}
        focusable={!disabled}
        {...props}
        disabled={disabled}
        className={cn(container({ variant, size, className, disabled }))}
      >
        {children ? (
          <UIText
            numberOfLines={numberOfLines}
            style={{ color: themeColor }}
            className={cn(text({ size, className: textClassName }))}
          >
            {children}
          </UIText>
        ) : null}
      </UIPressable>
    );
  }
);
