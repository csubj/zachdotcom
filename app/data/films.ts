export interface Film {
  id: string;
  slug: string;
  title: string;
  year: number;
  shortDescription: string;
  longDescription: string;
  thumbnail: string;
  thumbnailBlur?: string;
  vimeoId: string;
  images: string[];
  imageBlurs?: string[];
}

export const films: Film[] = [
  {
    id: '1',
    slug: 'joy',
    title: 'Joy',
    year: 2023,
    shortDescription: 'Laith returns to Chicago from New York City, where he lives as a struggling actor. He travels to the Indiana Dunes where he meets Arturo.',
    longDescription: `
                Laith, whose family owns a Middle Eastern restaurant, returns to
                Chicago from New York City, where he lives as a struggling
                actor. Invited to a deep listening sonic meditation, he travels
                to the Indiana Dunes, hoping to escape the dull malaise of
                returning home. However, Laith abandons his plans at the Dunes
                when he meets Arturo, a Paraguayan photographer visiting
                Chicago, before attending a film workshop. Not wanting to say
                goodbye, they explore the area together, breaking into an empty
                house where their desire to play takes over. Empowered by each
                other&apos;s willingness to rebel against norms, they connect
                through the simulation of banal rituals of the everyday.

                Told through their two perspectives, the film responds to the
                actualities of their individual lives. The film is not scripted
                and is based on a real-life couple, capturing aspects of their
                relationship and re-enacting their lives as they navigate
                different proposals of play, sometimes political, sexual, and
                quotidian.

                A document of the infrathin, as described by Marcel Duchamp, can
                only be defined through examples, exploring where the leftover
                spaces and distance between these ephemeral impressions
                exist—collapsing negative and positive spaces, imprints and
                memories of ghosts, of bodies of spaces, what separates these
                simultaneous in/out sensations? How do you show the warmth of
                someone leaving? The first two chapters follow a structure that
                implies multiple perspectives and repetition as an exploration
                of liminality. This form echoes fugues and the paintings of
                Cezanne as a way to see multifarious perspectives and
                observations on the sacred and banal.

                The repetition in a film about joy brings attention to the minor
                differences of subjective experience while celebrating a sense
                of sacredness in the everyday. Silence and the wind become stars
                as they pursue a new way of living founded in play. Regaining
                this capacity to play and noticing the disappearance of rituals
                is not nostalgia but rather a way to remember the excitement of
                when trees were seen moving. How do we allow trees to be trees
                again?`,
    thumbnail: '/images/films/joy/0.png',
    thumbnailBlur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==',
    vimeoId: '787246109',
    images: [
      '/images/films/joy/0.png',
      '/images/films/joy/1.png',
      '/images/films/joy/2.png',
      '/images/films/joy/3.png',
      '/images/films/joy/4.png',
      '/images/films/joy/5.png',
      '/images/films/joy/6.png',
    ],
    imageBlurs: [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==',
    ],
  },
];

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find(film => film.slug === slug);
}

