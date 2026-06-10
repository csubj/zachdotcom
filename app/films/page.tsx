import Link from 'next/link';
import Image from 'next/image';
import { Box, Card, Container, Flex, Grid, Heading, Inset, Text } from '@radix-ui/themes';
import { films } from '../data/films';

export default function Films() {
  return (
    <Box py="9" px="4">
      <Container size="4">
        <Heading size="8" mb="6">
          Films
        </Heading>
        <Grid columns={{ initial: '1', md: '2', lg: '3' }} gap="5">
          {films.map((film) => (
            <Link key={film.id} href={`/films/${film.slug}`} style={{ textDecoration: 'none' }}>
              <Card size="2" style={{ height: '100%' }}>
                <Inset clip="padding-box" side="top" pb="current">
                  <Box position="relative" style={{ aspectRatio: '16 / 9' }}>
                    <Image
                      src={film.thumbnail}
                      alt={film.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder={film.thumbnailBlur ? 'blur' : 'empty'}
                      blurDataURL={film.thumbnailBlur}
                    />
                  </Box>
                </Inset>
                <Flex direction="column" gap="2" p="4">
                  <Flex align="baseline" justify="between" gap="2">
                    <Heading size="4">{film.title}</Heading>
                    <Text size="1" color="gray">
                      {film.year}
                    </Text>
                  </Flex>
                  <Text size="2" color="gray">
                    {film.shortDescription}
                  </Text>
                </Flex>
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
