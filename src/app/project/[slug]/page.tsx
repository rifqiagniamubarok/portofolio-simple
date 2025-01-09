import * as Projects from '@/projects';

const mdxFiles = [
  {
    slug: 'signlys',
    file: <Projects.Signlys />,
  },
];

export default async function page({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  try {
    const slug = (await params).slug;
    if (!slug) {
      throw 'not found';
    }

    const File = mdxFiles.find((file) => file.slug === slug);

    if (!File) {
      throw 'not found';
    }

    return <div>{File.file}</div>;
  } catch (error) {
    console.error({ error });
    return {
      notFound: true,
    };
  }
}
