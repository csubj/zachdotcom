import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Box, Container, Flex, Heading, Link as RadixLink, Text } from '@radix-ui/themes';
import { films, getFilmBySlug } from '@/app/data/films';
import { InteractiveGallery } from './interactive-gallery';

export async function generateStaticParams() {
  return films.map((film) => ({
    slug: film.slug,
  }));
}

export default async function FilmDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = getFilmBySlug(slug);

  if (!film) {
    notFound();
  }

  return (
    <Box py="9" px="4">
      <Container size="4">
        <RadixLink asChild size="2" mb="5" style={{ display: 'inline-flex' }}>
          <Link href="/films">
            <Flex align="center" gap="1">
              <ArrowLeftIcon />
              Back to Films
            </Flex>
          </Link>
        </RadixLink>

        <Box mb="5">
          <Flex
            align="baseline"
            justify="between"
            gap="4"
            mb="2"
            wrap="wrap"
          >
            <Heading size="8">{film.title}</Heading>
            <Text size="4" color="gray" style={{ flexShrink: 0 }}>
              {film.year}
            </Text>
          </Flex>
          {film.specs && (
            <Text size="3" color="gray">
              {film.specs}
            </Text>
          )}
        </Box>

        {film.vimeoId && (
          <Box mb="6">
            <Box position="relative" width="100%" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={`https://player.vimeo.com/video/${film.vimeoId}?title=0&byline=0&portrait=0`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: 'var(--radius-3)',
                  border: 'none',
                }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={film.title}
              />
            </Box>
          </Box>
        )}

        <Box mb="6" mx="auto" style={{ maxWidth: '42rem' }}>
          <Text size="3" align="center" style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>
            {film.longDescription}
          </Text>
        </Box>

        {film.images.length > 0 && (
          <InteractiveGallery images={film.images} filmTitle={film.title} />
        )}
      </Container>
    </Box>
  );
}
