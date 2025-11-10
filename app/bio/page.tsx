import Image from 'next/image';

export default function Bio() {
  return (
    <div className="min-h-screen py-20 px-6">
      
      <div className="max-w-4xl mx-auto">
      <div className="block md:hidden h-8" /> {/* Adds vertical space on mobile/smaller screens */}
          <div className="hidden md:block" style={{ minHeight: '2rem' }} /> {/* Adds vertical space on md+ screens */}

        <div className="grid md:grid-cols-1 gap-12 items-start">


          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Zach Barner is an artist who works in moving images using hybrid
              narrative methods. His recent work looks at play and silence as an act
              of resistance and a means against production, featuring the wind, chance
              encounters of the everyday, and finding joy.
            </p>
            
            <p className="text-lg leading-relaxed">
              His work has premiered at the Gene Siskel Film Center, and projects he 
              has collaborated on have been shown at Berlinale, Cannes, FID Marseille, 
              Sundance, SXSW, TIFF, True/False, and Visions du Reel.
            </p>
            
            <p className="text-lg leading-relaxed">
              He is the co-founder of the production company Thrd Factory. He has also 
              worked with commercials, television, and film for networks such as HBO, FX, 
              NBC, 20th Century Fox, Showtime, CW, and E!
            </p>
            
            <p className="text-lg leading-relaxed">
              He studied his Bachelor of Fine Arts at The School of the Art Institute of 
              Chicago. Residences include The Ragdale Foundation and Ox-bow School of the Art.
            </p>
            
            <p className="text-lg leading-relaxed">
              He lives and works in Valencia, CA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

