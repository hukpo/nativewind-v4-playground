import "../global.css";

import { vars } from "nativewind";
import React, { useState } from "react";
import { UIView } from "@hukpo/ui-kit/ui-view";
import { UIText } from "@hukpo/ui-kit/ui-text";
import { UIButton } from "@hukpo/ui-kit/ui-button";
import { ThemeProvider } from "@hukpo/ui-kit/theme";
import { UIPressable } from "@hukpo/ui-kit/ui-pressable";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <UIView className="bg-green-300 flex-1 items-center justify-center gap-10">
        <UIPressable
          className="active:opacity-20"
          onPress={() => setCount((c) => c + 1)}
        >
          <UIText className="text-destructive text-xxxLarge">
            Cound: {count}
          </UIText>
        </UIPressable>

        <UIButton variant="destructive" onPress={() => setCount((c) => c + 1)}>
          Press me
        </UIButton>
      </UIView>
    </ThemeProvider>
  );
};
