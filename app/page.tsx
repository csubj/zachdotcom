import localFont from 'next/font/local';
import { Box, Container, Flex } from '@radix-ui/themes';

const myFont = localFont({
  src: './fonts/another.ttf',
  display: 'swap',
  weight: '400',
  style: 'normal',
  variable: '--font-myFont',
});

export default function Home() {
  return (
    <Flex align="center" justify="center" px="4" style={{ minHeight: 'calc(100vh - 5rem)' }}>
      <Container size="2">
        <Box
          className={myFont.className}
          style={{
            textIndent: '2rem',
            fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
            lineHeight: 1.25,
            textAlign: 'center',
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
            <Box asChild pr="9" style={{ textAlign: 'right' }}>
              <p>J-M.S.</p>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Flex>
  );
}
