import Image from 'next/image';
import Link from 'next/link';

const ProjectPeek = () => {
  return (
    <Link
      href={'/project/signlys'}
      className="grid grid-cols-4 gap-4 items-start hover:bg-background-hover cursor-pointer p-4 transition-colors duration-200 rounded-sm hover:bg-opacity-50 hover:bg-blur-lg hover:shadow-md"
    >
      <div>
        <div className="relative w-full aspect-video bg-black border border-foreground rounded-sm overflow-hidden">
          <Image src={'/projects/signlys.jpeg'} alt="signlys" fill className="object-cover" />
        </div>
      </div>
      <div className="col-span-3">
        <p className="font-medium leading-none">SIGNLYS</p>
        <div className="w-3 h-0.5 bg-black mt-1"></div>
        <p className="text-sm">Web app for signing a pdf document online. With a feature and layout similar to other editing applications.</p>
      </div>
    </Link>
  );
};
export default ProjectPeek;
