'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross2Icon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { Box, Dialog, Flex, Grid, Heading, IconButton, Text, VisuallyHidden } from '@radix-ui/themes';

interface InteractiveGalleryProps {
  images: string[];
  filmTitle: string;
}

export function InteractiveGallery({ images, filmTitle }: InteractiveGalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((index) => Math.min(index + 1, images.length - 1));
  };

  const prevImage = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  return (
    <>
      <Box>
        <Heading size="6" mb="4">
          Stills
        </Heading>
        <Grid columns={{ initial: '1', md: '2' }} gap="4">
          {images.map((image, index) => (
            <Box
              key={image}
              position="relative"
              className="group"
              style={{ aspectRatio: '16 / 9', cursor: 'pointer', borderRadius: 'var(--radius-3)', overflow: 'hidden' }}
              onClick={() => openAt(index)}
            >
              <Image
                src={image}
                alt={`${filmTitle} still ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <Flex
                align="center"
                justify="center"
                position="absolute"
                inset="0"
                className="bg-transparent transition-colors group-hover:bg-black/20"
              >
                <MagnifyingGlassIcon
                  width={48}
                  height={48}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Flex>
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
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
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
            position="relative"
            width="100%"
            style={{ height: 'min(85vh, 900px)', padding: '0 4rem' }}
          >
            <Image
              src={images[currentIndex]}
              alt={`${filmTitle} still ${currentIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="100vw"
              priority
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
