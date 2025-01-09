import Image from 'next/image';
import Link from 'next/link';

const ProjectPeek = ({ name, thumbnail, slug, description, tags }: { name: string; thumbnail: string; slug: string; description: string; tags: string }) => {
  return (
    <Link
      href={`/project/${slug}`}
      className="grid grid-cols-4 gap-4 items-start hover:bg-background-hover cursor-pointer p-4 transition-colors duration-200 rounded-sm hover:bg-opacity-50 hover:bg-blur-lg hover:shadow-md"
    >
      <div>
        <div className="relative w-full aspect-video bg-black border border-foreground rounded-sm overflow-hidden">
          <Image src={thumbnail} alt="signlys" fill className="object-cover" />
        </div>
      </div>
      <div className="col-span-3">
        <p className="font-medium leading-none">{name}</p>
        <div className="w-3 h-0.5 bg-black mt-1"></div>
        <p className="text-sm">{description}</p>
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {tags.split(',').map((t) => {
            return (
              <div key={t} className="text-sm italic">
                {t}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};
export default ProjectPeek;
