import Film from "@/components/film/film";
import FilmNav from "@/components/film/filmnav";
import PhotoCarousel from "@/components/photos/PhotoCarousel";

export default function Joy() {
  return (
    <div>
      <FilmNav titles={["joy", "other film"]} />

      <Film
        title="Joy"
        coverImage={""}
        embedlink={"https://google.com"}
        releasedate={"WIP 2023"}
      ></Film>

      <div>
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/787246109?h=b2b80ed480&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            // allowfullscreen
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            title="a short film about joy (sample)"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>

      <div className="flex flex-row space-x-5">
        <div className=" h-screen w-3/5">
          <PhotoCarousel title="Joy" imageCount={7}></PhotoCarousel>
        </div>
        <div className="space-y-3 text-justify indent-8 w-2/5">
          <p>
            Laith, whose family owns a Middle Eastern restaurant, returns to
            Chicago from New York City, where he lives as a struggling actor.
            Invited to a deep listening sonic meditation, he travels to the
            Indiana Dunes, hoping to escape the dull malaise of returning home.
            However, Laith abandons his plans at the Dunes when he meets Arturo,
            a Paraguayan photographer visiting Chicago, before attending a film
            workshop. Not wanting to say goodbye, they explore the area
            together, breaking into an empty house where their desire to play
            takes over. Empowered by each other's willingness to rebel against
            norms, they connect through the simulation of banal rituals of the
            everyday.
          </p>
          <p>
            Told through their two perspectives, the film responds to the
            actualities of their individual lives. The film is not scripted and
            is based on a real-life couple, capturing aspects of their
            relationship and re-enacting their lives as they navigate different
            proposals of play, sometimes political, sexual, and quotidian.
          </p>
          <p>
            A document of the infrathin, as described by Marcel Duchamp, can
            only be defined through examples, exploring where the leftover
            spaces and distance between these ephemeral impressions
            exist—collapsing negative and positive spaces, imprints and memories
            of ghosts, of bodies of spaces, what separates these simultaneous
            in/out sensations? How do you show the warmth of someone leaving?
            The first two chapters follow a structure that implies multiple
            perspectives and repetition as an exploration of liminality. This
            form echoes fugues and the paintings of Cezanne as a way to see
            multifarious perspectives and observations on the sacred and banal.
          </p>
          <p>
            The repetition in a film about joy brings attention to the minor
            differences of subjective experience while celebrating a sense of
            sacredness in the everyday. Silence and the wind become stars as
            they pursue a new way of living founded in play. Regaining this
            capacity to play and noticing the disappearance of rituals is not
            nostalgia but rather a way to remember the excitement of when trees
            were seen moving. How do we allow trees to be trees again?
          </p>
        </div>
      </div>
    </div>
  );
}