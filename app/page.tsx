import localFont from "next/font/local";

const myFont = localFont({
  src: "./fonts/another.ttf",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-myFont",
});


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
    <div
      className={`${myFont.className} mx-auto w-4/5 md:w-2/3 lg:w-1/2 mt-20 indent-8 lg:indent-16 text-xl md:text-2xl lg:text-3xl leading-tight text-center`}
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
    </div>
  );
}
