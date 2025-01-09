import * as Projects from '@/projects';
import { getDetailProject } from '@/server/project';
import dayjs from 'dayjs';
import { Clock } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const mdxFiles = [
  {
    slug: 'signlys',
    file: Projects.Signlys,
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  if (!slug) {
    throw 'not found';
  }

  const File = mdxFiles.find((file) => file.slug === slug);
  if (!File) {
    throw 'not found';
  }

  const project = await getDetailProject(slug);

  return {
    title: `${project?.name} | Rifqi Agnia Mubarok`,
    description: project?.description,
  };
}

export default async function page({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  try {
    const slug = (await params).slug;

    if (!slug) {
      return notFound();
    }

    const File = mdxFiles.find((file) => file.slug === slug);

    if (!File) {
      return notFound();
    }

    const project = await getDetailProject(slug);

    if (!project) {
      return notFound();
    }

    return (
      <>
        <div className="w-fit max-w-[634px] mb-10 pt-5 space-y-4">
          <div>
            <p className="text-3xl font-semibold text-black capitalize">{project?.name}</p>
            <p className="text-base ">{project?.description}</p>
          </div>
          <div>
            <div className="w-full  bg-black h-[1px]"></div>
            <div className="flex justify-between items-center my-2">
              <div className="flex items-center gap-2">
                <div className="relative w-8 aspect-square rounded-full overflow-hidden bg-black ">
                  <Image src={'/profile.png'} alt="rifqi_agnia_mubarok_picture" fill className=" object-cover object-center  top-0 " />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold leading-none">Rifqi Agnia Mubarok</p>
                  <p className="text-xs leading-none">{dayjs(project?.createdAt).format('MMMM DD, YYYY')}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <p className="text-sm">12 min read</p>
              </div>
            </div>
            <div className="w-full  bg-black h-[1px]"></div>
          </div>
          <div className="w-full rounded-sm aspect-video relative overflow-hidden">
            {project?.thumnail && <Image src={project?.thumnail} alt="signlys" fill className="object-cover object-top" />}
            {/* <div className="absolute z-20 w-full h-20 bottom-0  bg-gradient-to-t from-background to-transparent"></div> */}
          </div>
        </div>
        <div className="prose max-w-[634px] prose-h1:text-3xl prose-h1:leading-none prose-h1:font-medium prose-h1:my-0 prose-h1:py-0 prose-h2:text-2xl prose-h2:leading-none prose-h2:font-medium prose-h3:text-xl prose-h3:font-medium prose-p:leading-none">
          <div> {<File.file />}</div>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    return notFound();
  }
}
