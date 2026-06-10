'use client';

import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

export function RadixThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Theme accentColor="gray" grayColor="slate" radius="medium" scaling="100%" panelBackground="solid">
        {children}
      </Theme>
    </ThemeProvider>
  );
}
