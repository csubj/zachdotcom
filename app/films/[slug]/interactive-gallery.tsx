'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross2Icon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { Box, Dialog, Flex, Grid, Heading, IconButton, Text, VisuallyHidden } from '@radix-ui/themes';
import type { FilmImage } from '@/app/data/films';

interface InteractiveGalleryProps {
  images: FilmImage[];
  filmTitle: string;
}

export function InteractiveGallery({ images, filmTitle }: InteractiveGalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((index) => Math.min(index + 1, images.length - 1));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, nextImage, prevImage]);

  return (
    <>
      <Box>
        <Heading size="6" mb="4">
          Stills
        </Heading>
        <Grid columns={{ initial: '1', md: '2' }} gap="4" width="100%" align="start">
          {images.map((image, index) => (
            <Box
              key={image.src}
              width="100%"
              className="group"
              style={{ cursor: 'pointer' }}
              onClick={() => openAt(index)}
            >
              <Box
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-3)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={image.src}
                  alt={`${filmTitle} still ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  loading="eager"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder={image.blur ? 'blur' : 'empty'}
                  blurDataURL={image.blur}
                />
                <Flex
                  align="center"
                  justify="center"
                  className="pointer-events-none absolute inset-0 bg-transparent transition-colors group-hover:bg-black/20"
                >
                  <MagnifyingGlassIcon
                    width={48}
                    height={48}
                    className="opacity-40 transition-opacity group-hover:opacity-100 md:opacity-0"
                  />
                </Flex>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Content
          maxWidth="95vw"
          style={{
            maxHeight: '95vh',
            padding: 0,
            backgroundColor: 'transparent',
            overflow: 'hidden',
          }}
        >
          <VisuallyHidden>
            <Dialog.Title>
              {filmTitle} still {currentIndex + 1} of {images.length}
            </Dialog.Title>
          </VisuallyHidden>
          <IconButton
            variant="ghost"
            color="gray"
            highContrast
            size="3"
            onClick={() => setOpen(false)}
            aria-label="Close gallery"
            style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 1 }}
          >
            <Cross2Icon />
          </IconButton>

          {currentIndex > 0 && (
            <IconButton
              variant="ghost"
              color="gray"
              highContrast
              size="3"
              onClick={prevImage}
              aria-label="Previous image"
              style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', zIndex: 1 }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}

          {currentIndex < images.length - 1 && (
            <IconButton
              variant="ghost"
              color="gray"
              highContrast
              size="3"
              onClick={nextImage}
              aria-label="Next image"
              style={{ position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)', zIndex: 1 }}
            >
              <ChevronRightIcon />
            </IconButton>
          )}

          <Box
            width="100%"
            style={{
              position: 'relative',
              height: 'min(90vh, 900px)',
              overflow: 'hidden',
            }}
          >
            <Image
              src={images[currentIndex].src}
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              priority
              style={{
                objectFit: 'cover',
                filter: 'blur(32px) brightness(0.6)',
                transform: 'scale(1.15)',
              }}
            />
            <Image
              src={images[currentIndex].src}
              alt={`${filmTitle} still ${currentIndex + 1}`}
              fill
              sizes="100vw"
              priority
              style={{ objectFit: 'contain', zIndex: 1 }}
            />
          </Box>

          <Flex
            justify="center"
            py="3"
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Text size="2" color="gray" highContrast>
              {currentIndex + 1} / {images.length}
            </Text>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
