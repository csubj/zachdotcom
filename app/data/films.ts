export interface FilmImage {
  src: string;
  width: number;
  height: number;
  blur?: string;
}

export interface Film {
  id: string;
  slug: string;
  title: string;
  year: number;
  specs?: string;
  shortDescription: string;
  longDescription: string;
  thumbnail: string;
  thumbnailBlur?: string;
  vimeoId?: string;
  images: FilmImage[];
}

export const films: Film[] = [
  {
    id: '1',
    slug: 'joy',
    title: 'Joy',
    year: 2023,
    shortDescription: 'Laith returns to Chicago from New York City, where he lives as a struggling actor. He travels to the Indiana Dunes where he meets Arturo.',
    longDescription: `Laith, whose family owns a Middle Eastern restaurant, returns to Chicago from New York City, where he lives as a struggling actor. Invited to a deep listening sonic meditation, he travels to the Indiana Dunes, hoping to escape the dull malaise of returning home. However, Laith abandons his plans at the Dunes when he meets Arturo, a Paraguayan photographer visiting Chicago, before attending a film workshop. Not wanting to say goodbye, they explore the area together, breaking into an empty house where their desire to play takes over. Empowered by each other's willingness to rebel against norms, they connect through the simulation of banal rituals of the everyday.

Told through their two perspectives, the film responds to the actualities of their individual lives. The film is not scripted and is based on a real-life couple, capturing aspects of their relationship and re-enacting their lives as they navigate different proposals of play, sometimes political, sexual, and quotidian.

A document of the infrathin, as described by Marcel Duchamp, can only be defined through examples, exploring where the leftover spaces and distance between these ephemeral impressions exist—collapsing negative and positive spaces, imprints and memories of ghosts, of bodies of spaces, what separates these simultaneous in/out sensations? How do you show the warmth of someone leaving? The first two chapters follow a structure that implies multiple perspectives and repetition as an exploration of liminality. This form echoes fugues and the paintings of Cezanne as a way to see multifarious perspectives and observations on the sacred and banal.

The repetition in a film about joy brings attention to the minor differences of subjective experience while celebrating a sense of sacredness in the everyday. Silence and the wind become stars as they pursue a new way of living founded in play. Regaining this capacity to play and noticing the disappearance of rituals is not nostalgia but rather a way to remember the excitement of when trees were seen moving. How do we allow trees to be trees again?`,
    thumbnail: '/images/films/joy/0.png',
    thumbnailBlur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==',
    vimeoId: '787246109',
    images: [
      { src: '/images/films/joy/0.png', width: 3840, height: 2160, blur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' },
      { src: '/images/films/joy/1.png', width: 3840, height: 2160, blur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' },
      { src: '/images/films/joy/2.png', width: 3840, height: 2160, blur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' },
      { src: '/images/films/joy/3.png', width: 3840, height: 2160, blur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' },
      { src: '/images/films/joy/4.png', width: 3840, height: 2160, blur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' },
      { src: '/images/films/joy/5.png', width: 3840, height: 2160, blur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' },
      { src: '/images/films/joy/6.png', width: 3840, height: 2160, blur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' },
    ],
  },
  {
    id: '2',
    slug: 'spinozas-rainbow',
    title: "Spinoza's Rainbow",
    year: 2026,
    specs: '16mm / Color / 3:47',
    shortDescription:
      "A prelude introduces the algebraic calculation of a rainbow's arc, reputed to be by Baruch Spinoza and dating back to 1687.",
    longDescription: `A prelude introduces the algebraic calculation of a rainbow's arc, reputed to be by Baruch Spinoza and dating back to 1687. A shadow observes itself, connecting two points. Through a series of single, double, and triple exposures, the three color records of 16mm film emulsion converge and diverge. Breath becomes a source of movement, and language transforms into frequencies, as if they could become light, through the recitation of three poems by Friedrich Nietzsche from 1887.`,
    thumbnail: '/images/films/rainbow/still-1.png',
    thumbnailBlur:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==',
    images: [
      { src: '/images/films/rainbow/still-1.png', width: 3000, height: 2240, blur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' },
      { src: '/images/films/rainbow/still-2.png', width: 3000, height: 2240, blur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' },
      { src: '/images/films/rainbow/still-3.png', width: 3000, height: 2240, blur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' },
    ],
  },
];

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find(film => film.slug === slug);
}

