'use client';

import NextLink from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Box, Flex, HoverCard, Link, Text } from '@radix-ui/themes';
import { films } from '../data/films';

interface FilmsNavLinkProps {
  size?: '2' | '3' | '4';
}

export function FilmsNavLink({ size = '2' }: FilmsNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === '/films' || pathname.startsWith('/films/');

  return (
    <HoverCard.Root openDelay={150} closeDelay={100}>
      <HoverCard.Trigger>
        <Link
          asChild
          size={size}
          weight={isActive ? 'medium' : 'regular'}
          color={isActive ? undefined : 'gray'}
        >
          <NextLink href="/films">Films</NextLink>
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Content size="2" side="bottom" align="start" style={{ width: 320 }}>
        <Flex direction="column" gap="3">
          {films.map((film) => (
            <Link
              key={film.id}
              asChild
              underline="none"
              color="gray"
              highContrast
            >
              <NextLink href={`/films/${film.slug}`}>
                <Flex gap="3" align="center">
                  <Box
                    position="relative"
                    style={{
                      width: 96,
                      flexShrink: 0,
                      aspectRatio: '16 / 9',
                      borderRadius: 'var(--radius-2)',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={film.thumbnail}
                      alt={film.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="96px"
                      placeholder={film.thumbnailBlur ? 'blur' : 'empty'}
                      blurDataURL={film.thumbnailBlur}
                    />
                  </Box>
                  <Flex direction="column" gap="1" style={{ minWidth: 0 }}>
                    <Flex align="baseline" justify="between" gap="2">
                      <Text size="2" weight="medium">
                        {film.title}
                      </Text>
                      <Text size="1" color="gray">
                        {film.year}
                      </Text>
                    </Flex>
                    <Text size="1" color="gray" style={{ lineHeight: 1.4 }}>
                      {film.shortDescription}
                    </Text>
                  </Flex>
                </Flex>
              </NextLink>
            </Link>
          ))}
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
