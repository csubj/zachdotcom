import { Box, Container, Flex, Text } from '@radix-ui/themes';

const paragraphs = [
  'Zachary Ridgway Barner is an artist who works in moving images using hybrid narrative methods. His recent work looks at light, color, and the tension of what is heard to what is seen. He is interested in play and silence as an act of resistance, featuring the wind, chance encounters of the everyday, and finding joy.',
  'His work has premiered at Antimatter [Media Art], the Bijou theater, and the Gene Siskel Film Center. He has produced films which have premiered at FID Marseille (in competition), Berlinale, and Sundance amongst others. He has also collaborated in other various roles on films which have shown at Cannes, SXSW, TIFF, True/False, and Visions du Reel.',
  'He was the co-founder of the collective production company Thrd Factory (2018-2026). He has also worked on commercials, television, and film for networks such as HBO, FX, NBC, 20th Century Fox, Showtime, CW, and E!',
  "Zach is a candidate of a Master of Fine Arts in Program Film and Video at California Institute of the Arts. He studied his Bachelor of Fine Arts at The School of the Art Institute of Chicago. Residences include The Ragdale Foundation and Ox-bow School of the Art.",
  'He lives and works in Los Angeles, CA.',
];

export default function Bio() {
  return (
    <Box py="9" px="4">
      <Container size="3">
        <Box mb="6" display={{ initial: 'block', md: 'none' }} style={{ height: '2rem' }} />
        <Flex direction="column" gap="4">
          {paragraphs.map((text) => (
            <Text key={text} size="3" style={{ lineHeight: 1.7 }}>
              {text}
            </Text>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
