import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { photoCards, type PhotoCardItem } from '@/app/data/photo-cards';
import { cn } from '@/app/components/ui/utils';

type PhotoCardCarouselProps = {
  photos?: PhotoCardItem[];
  className?: string;
};

export function PhotoCardCarousel({ photos = photoCards, className }: PhotoCardCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const hasMultiplePhotos = photos.length > 1;

  return (
    <div
      className={cn(
        'bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl overflow-hidden aspect-square relative',
        className,
      )}
    >
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {photos.map((photo) => (
            <div key={photo.src} className="min-w-0 shrink-0 grow-0 basis-full h-full">
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {hasMultiplePhotos && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
            aria-label="Previous photo"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
            aria-label="Next photo"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => scrollTo(index)}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  index === selectedIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/75',
                )}
                aria-label={`Go to photo ${index + 1}`}
                aria-current={index === selectedIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
