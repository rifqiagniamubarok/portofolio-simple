import BlogPeek from '@/components/partial/BlogPeek';
import Navbar from '@/components/partial/Navbar';
import ProjectPeek from '@/components/partial/ProjectPeek';
import Socmeds from '@/components/partial/Socmeds';
import { getAllBlogs } from '@/server/blog';
import { getAllProjects } from '@/server/project';

const ExperienceItem = ({ date, company, position, description, techs }: { date: string; company: string; position: string; description: string; techs: string[] }) => {
  return (
    <div className="grid grid-cols-11 gap-2">
      <div className="col-span-3">
        <p className="text-base">{date}</p>
      </div>
      <div className="col-span-8">
        <p className="font-medium">{company}</p>
        <p className="italic">{position}</p>
        <p>{description}</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {techs.map((t) => (
            <div key={t} className="border border-foreground text-foreground px-2 py-1 w-fit text-sm">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const experiences = [
  {
    date: 'MEI 22 - PRESENT',
    company: 'PT SINERGI MERAH PUTIH',
    position: 'Full-stack Developer',
    description:
      'Build and maintain application of company and client. Engage in discucision, planning, development, testing, fixing and security issue. Work for type of application from monolit, microservices. Work closely with cross-functional team.',
    techs: [
      'HTML',
      'CSS',
      'JAVASCRIPT',
      'PHP',
      'REACT',
      'NEXT JS',
      'VUE JS',
      'NUXT JS',
      'Laravel',
      'Tailwind',
      'Node JS',
      'Express JS',
      'PostgreSQL',
      'MySQL',
      'Aerospike',
      'Redis',
      'Apisix',
      'Docker',
      'Burp suite',
    ],
  },
  {
    date: 'SEP 22 - APR 23',
    company: 'PT RAKSASA INDONESIA',
    position: 'Front-end Developer',
    description: 'Build and maintain application of company. Work closely with cross-functional team. Engage in discussions to resolve critical issues to accelerate deadlines',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NEXT JS', 'Material UI'],
  },
];

export default async function Home() {
  const projects = await getAllProjects();
  const blogs = await getAllBlogs();
  return (
    <>
      <div className="fixed w-[48vw] left-0 inset-y-0 h-full ">
        <div className="container ml-auto pl-20 inset-0 ">
          <div className="  py-36  flex flex-col  h-screen justify-between ">
            <div className="space-y-10">
              <div>
                <p className="text-3xl font-semibold">RIFQI AGNIA MUBAROK</p>
                <p className="text-lg">Full-stack developer</p>
              </div>
              <div>
                <Navbar />
              </div>
            </div>
            <div className="">
              <Socmeds />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen">
        <div className="container mx-auto px-20 grid grid-cols-10 h-screen  text-foreground ">
          <div className="col-span-5 h-screen  "></div>
          <div className="col-span-5 ">
            <div className="text-base my-36 space-y-20">
              <section id="about" className="space-y-4 px-4">
                <p className="font-medium">About_</p>
                <p>{`I'm a developer who thrives at the crossroads of design and development. I am dedicated to creating user experiences that are not only visually appealing but also optimized for performance and accessibility.`}</p>
                <p>{`
        My development story started when the world was facing COVID-19. I was not in a computer major, but at the time I thought I didn't have many chances to have a good career in electronics. So I started to learn programming. After 2 years of self-learning, I fell in love with this activity.
        `}</p>
                <p>
                  {`I have experience in both front-end and back-end development. I like to work on problem-solving and designing user interfaces and experiences. I am confident in my ability to face new challenges and learn new technologies.`}
                </p>
              </section>
              <section id="experience" className="space-y-4  px-4">
                <p className="font-medium">Experience_</p>
                {experiences.map((e) => (
                  <ExperienceItem key={e.company} {...e} />
                ))}
              </section>
              <section id="project" className="space-y-4">
                <p className="font-medium px-4">Project_</p>
                <div>
                  {projects.map((project) => {
                    return (
                      <ProjectPeek key={project.id} name={project.name} slug={project.slug} thumbnail={project.thumnail} description={project.description} tags={project.tags} />
                    );
                  })}
                </div>
              </section>
              <section id="blog" className="space-y-4">
                <p className="font-medium px-4">Blog_</p>
                <div>
                  {blogs?.map((blog) => {
                    return <BlogPeek key={blog.id} name={blog.name} slug={blog.slug} thumbnail={blog.thumbnail} description={blog.description} tags={blog.tags} />;
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
