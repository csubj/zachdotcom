'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Container, Flex, Link } from '@radix-ui/themes';
import { FilmsNavLink } from './films-nav-link';
import { ThemeToggle } from './theme-toggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/bio', label: 'Bio' },
] as const;

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      asChild
      size="2"
      weight={isActive ? 'medium' : 'regular'}
      color={isActive ? undefined : 'gray'}
    >
      <NextLink href={href}>{label}</NextLink>
    </Link>
  );
}

export default function Navigation() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      style={{ zIndex: 50 }}
      className="rt-Panel"
    >
      <Box
        style={{
          backgroundColor: 'var(--color-panel-translucent)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--gray-a5)',
        }}
      >
        <Container size="4" px="4" py="3">
          <Flex align="center" justify="between">
            <Flex align="center" gap="6">
              <Link asChild size="4" weight="medium">
                <NextLink href="/">Zach Barner</NextLink>
              </Link>
              <Flex gap="4" display={{ initial: 'none', md: 'flex' }}>
                {links.map((link) => (
                  <NavLink key={link.href} href={link.href} label={link.label} />
                ))}
                <FilmsNavLink />
              </Flex>
            </Flex>
            <ThemeToggle />
          </Flex>
          <Flex gap="4" mt="3" display={{ initial: 'flex', md: 'none' }}>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
            <FilmsNavLink />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
