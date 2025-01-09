import dayjs from 'dayjs';
import { Clock } from 'lucide-react';
import Image from 'next/image';

const BlogPeek = () => {
  return (
    <div className="grid grid-cols-4 gap-4 items-start hover:bg-background-hover cursor-pointer p-4 transition-colors duration-200 rounded-sm hover:bg-opacity-50 hover:bg-blur-lg hover:shadow-md">
      <div>
        <div className="relative w-full aspect-video bg-black border border-foreground rounded-sm overflow-hidden">
          <Image src={'/projects/signlys.jpeg'} alt="signlys" fill className="object-cover" />
        </div>
      </div>
      <div className="col-span-3">
        <p className="font-medium leading-none">How to setup prisma in your own nextjs app</p>
        <div className="w-3 h-0.5 bg-black mt-1"></div>
        <p className="text-sm">Web app for signing a pdf document online. With a feature and layout similar to other editing applications.</p>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm">{dayjs(new Date()).format('MMM DD, YYYY')}</p>
          <div className="h-[1.5px] w-4 bg-foreground"></div>
          <Clock size={16} />
          <p className="text-sm">5 min read</p>
        </div>
      </div>
    </div>
  );
};
export default BlogPeek;
