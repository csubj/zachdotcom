import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { films, getFilmBySlug } from '@/app/data/films';

export async function generateStaticParams() {
  return films.map((film) => ({
    slug: film.slug,
  }));
}

export default async function FilmDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = getFilmBySlug(slug);

  if (!film) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/films"
          className="inline-flex items-center mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Films
        </Link>

        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-4">
            <h1 className="text-5xl font-bold">
              {film.title}
            </h1>
            <span className="text-xl">
              {film.year}
            </span>
          </div>
        </div>

        {/* Vimeo Embed */}
        <div className="mb-12">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src={`https://player.vimeo.com/video/${film.vimeoId}?title=0&byline=0&portrait=0`}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={film.title}
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 prose prose-lg max-w-none">
          <div className="leading-relaxed whitespace-pre-line">
            {film.longDescription}
          </div>
        </div>

        {/* Image Gallery */}
        {film.images.length > 0 && (
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Stills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {film.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video w-full rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${film.title} still ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

