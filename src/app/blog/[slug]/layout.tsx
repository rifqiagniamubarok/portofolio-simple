import Navbar from '@/components/partial/Navbar';
import Socmeds from '@/components/partial/Socmeds';

import * as React from 'react';

export default async function Layout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ slug: string }> }>) {
  try {
    const slug = (await params).slug;

    if (!slug) {
      throw 'not found';
    }

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
              <div>{children}</div>
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
