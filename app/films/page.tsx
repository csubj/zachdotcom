import Link from 'next/link';
import Image from 'next/image';
import { films } from '../data/films';

export default function Films() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Films
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film) => (
            <Link
              key={film.id}
              href={`/films/${film.slug}`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video w-full bg-gray-200 dark:bg-gray-800">
                  <Image
                    src={film.thumbnail}
                    alt={film.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      {film.title}
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {film.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {film.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

