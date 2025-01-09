import dayjs from 'dayjs';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BlogPeek = ({ name, slug, description, thumbnail, tags }: { name: string; slug: string; description: string; thumbnail: string; tags: string }) => {
  return (
    <Link
      href={`/blog/${slug}`}
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
        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm">{dayjs(new Date()).format('MMM DD, YYYY')}</p>
          <div className="h-[1.5px] w-4 bg-foreground"></div>
          <Clock size={16} />
          <p className="text-sm">5 min read</p>
        </div>
      </div>
    </Link>
  );
};
export default BlogPeek;
