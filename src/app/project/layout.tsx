import Navbar from '@/components/partial/Navbar';
import Socmeds from '@/components/partial/Socmeds';
import { getDetailProject } from '@/server/project';
import dayjs from 'dayjs';
import { Clock } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';

import * as React from 'react';

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  try {
    const requestUrl = (await headers()).get('x-url');
    const slug = requestUrl?.split('project/')[1];

    if (!slug) {
      throw 'not found';
    }

    const project = await getDetailProject(slug);

    return (
      <div>
        <div>
          <div className="w-screen flex justify-center carme gap-8">
            <div className=" ">
              <div className="sticky top-20 z-50">
                <div className="p-4 border border-foreground">
                  <p>Navigation </p>
                  <Navbar />
                  <div className="mt-20"></div>
                  <Socmeds />
                </div>
              </div>
            </div>
            <div className="w-fit">
              <div className="w-full mb-10 space-y-4">
                <div>
                  <p className="text-3xl font-semibold text-black">{project?.name}</p>
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
              <div className="prose prose-h1:text-3xl prose-h1:leading-none prose-h1:font-medium prose-h1:my-0 prose-h1:py-0 prose-h2:text-2xl prose-h2:leading-none prose-h2:font-medium prose-h3:text-xl prose-h3:font-medium prose-p:leading-none">
                <div>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}
