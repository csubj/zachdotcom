import localFont from 'next/font/local';
import { Box, Flex } from '@radix-ui/themes';

const myFont = localFont({
  src: './fonts/another.ttf',
  display: 'swap',
  weight: '400',
  style: 'normal',
  variable: '--font-myFont',
});

export default function Home() {
  return (
    <Flex
      align="center"
      justify="center"
      px="4"
      width="100%"
      style={{ minHeight: 'calc(100vh - 5rem)', minWidth: 0 }}
    >
      <Box width="100%" style={{ maxWidth: '42.5rem' }}>
        <Box
          className={`${myFont.className} home-prose`}
          style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.875rem)',
            lineHeight: 1.25,
            textAlign: 'center',
            overflowWrap: 'break-word',
          }}
        >
          <Flex direction="column" gap="4">
            <p>
              Once upon a time there was a little filmmaker... little but menacing,
              barely a filmmaker and already menacing, little and already menacing,
              little and already a filmmaker -—
            </p>
            <p>
              He is still only a filmmaker -- who is menacing -- but still enough of
              a filmmaker so that one has felt, that one feels, that one made him
              feel, that he is made to feel that he is, that he was a menace... with
              his cinematograph by his cinematograph; that he is menacing his
              cinematograph, that he was menacing, that he is a menace to the cinema
              with his cinematograph, by the cinematograph--that the cinematograph
              is a menace to the cinema.
            </p>
            <p>
              Filmmaker so that we know his cinematograph is a menace to the cinema;
              may his cinematograph be menacing, be a menace.
            </p>
            <Box asChild pr={{ initial: '4', sm: '9' }} style={{ textAlign: 'right' }}>
              <p>J-M.S.</p>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
