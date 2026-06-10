'use client';

import { IconButton } from '@radix-ui/themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return <IconButton variant="ghost" size="2" disabled aria-label="Toggle theme" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <IconButton
      variant="ghost"
      size="2"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
