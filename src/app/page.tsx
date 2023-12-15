import localFont from "next/font/local";

const myFont = localFont({
  src: "./fonts/another.ttf",
  display: "swap",
});

export default function Page() {
  return (
    <div
      className={`${myFont.className} container mx-auto w-5/6 mt-20  indent-8 lg:indent-16 lg:text-4xl text-2xl leading-5 sm:leading-6`}
    >
      <div>
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
        <br />
        <p className="pr-20 text-right">J-M.S.</p>
      </div>
    </div>
  );
}
