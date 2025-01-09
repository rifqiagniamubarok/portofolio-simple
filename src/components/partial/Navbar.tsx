import Link from 'next/link';

const NavbarItem = ({ name, link }: { name: string; link: string }) => {
  return (
    <li>
      <Link href={link} scroll={true}>
        - {name}
      </Link>
    </li>
  );
};

const navbars = [
  {
    name: 'About',
    link: '/#about',
  },
  {
    name: 'Experience',
    link: '/#experience',
  },
  {
    name: 'Project',
    link: '/#project',
  },
  {
    name: 'Blog',
    link: '/#blog',
  },
];

const Navbar = () => {
  return (
    <ul>
      {navbars.map((n) => (
        <NavbarItem key={n.name} name={n.name} link={n.link} />
      ))}
    </ul>
  );
};
export default Navbar;
