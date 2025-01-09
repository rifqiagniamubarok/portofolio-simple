import React from 'react';
import Link from 'next/link';

const SocmedItem = ({ link, icon }: { link: string; icon: React.ReactNode }) => {
  return (
    <Link href={link} target="_blank" className="grow-0">
      <div className="w-8 aspect-square fill-primary hover:fill-foreground-hover transition-colors duration-300">{icon}</div>
    </Link>
  );
};

const dataSocmeds = [
  {
    link: 'https://github.com/rifqiagniamubarok',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    link: 'https://www.showwcase.com/rifqiagniamubarok',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Showwcase</title>
        <path d="M8.554 2.938c.56-.103 1.126-.177 1.695-.22.128-.01.218-.031.273-.121.094-.153.26-.211.492-.228.624-.047 1.243-.05 1.869-.007.301.02.503.097.618.295.046.078.124.107.242.116.245.017.49.043.733.076.316.042.629.096.957.15a2.057 2.057 0 0 0-.244-.512c-.379-.605-.986-1.018-1.89-1.185-.679-.126-1.366-.114-2.054-.075-.43.025-.842.11-1.226.259-.8.307-1.193.831-1.466 1.452Zm-8.079.553c.272.103.527.245.757.423.503.385.849.843 1.17 1.313.356.522.637 1.067.901 1.62.053-.033.057-.07.068-.108.135-.437.293-.869.496-1.292.36-.75.841-1.444 1.718-1.953.088-.051.08-.087.015-.147a5.395 5.395 0 0 0-.927-.706 1.786 1.786 0 0 0-.955-.24c-.793.013-1.515.2-2.199.475-.394.158-.76.343-1.044.615Zm7.245-.165c-1.072.24-1.899.706-2.473 1.406-.458.557-.708 1.173-.936 1.793a15.233 15.233 0 0 0-.55 1.969 52.617 52.617 0 0 0-.589 3.215c-.122.783-.235 1.568-.34 2.354-.15 1.115-.285 2.23-.295 3.352-.01.985.021 1.966.44 2.916.274.623.746 1.135 1.54 1.477.823.353 1.724.544 2.647.688 1.366.213 2.755.283 4.148.3 1.498.016 2.994-.01 4.48-.167 1.09-.115 2.157-.29 3.168-.62.92-.3 1.59-.768 1.955-1.463.362-.69.486-1.408.528-2.136.095-1.644-.124-3.277-.354-4.91a83.408 83.408 0 0 0-.573-3.588c-.135-.73-.28-1.459-.468-2.182-.22-.84-.48-1.672-.931-2.466-.55-.967-1.473-1.65-2.876-1.944-3.4-.71-7.039-.326-8.521.006Zm14.169 9.746c0 .095.005.19.038.283l.111.766c-.016.048-.008.094.024.156.026-.064.083-.1.065-.155l.336-1.198c.023-.045.045-.089.033-.137.065-.11.08-.228.12-.342.244-.69.41-1.392.566-2.095.173-.773.321-1.55.512-2.32.236-.948.341-1.901.296-2.862-.017-.356-.04-.714-.172-1.083-.11.062-.206.108-.29.165-.386.26-.66.582-.906.915-.699.95-1.153 1.967-1.577 2.993-.021.052-.009.102.003.154.22.93.38 1.867.53 2.804.105.652.207 1.304.31 1.956zM.067 4.334c-.07.204-.066.412-.067.62-.002.941.139 1.874.308 2.807.147.81.352 1.613.551 2.417.191.78.391 1.558.6 2.335.2.739.272 1.487.348 2.236.005.054-.007.113.045.168.01-.016.023-.027.025-.039.136-1.097.292-2.191.469-3.282.172-1.064.337-2.129.58-3.186.032-.138.07-.272 0-.417-.141-.284-.247-.576-.382-.861-.357-.754-.737-1.502-1.306-2.189-.23-.278-.47-.555-.84-.754-.083-.052-.174-.145-.274-.112-.084.027-.053.141-.07.217-.002.013.008.027.013.04zm22.248-1.497a7.182 7.182 0 0 0-2.429-.4 1.25 1.25 0 0 0-.673.197c-.343.22-.58.494-.784.787-.042.06.003.084.056.116.233.139.45.303.646.49.676.643 1.022 1.392 1.307 2.16.087.234.164.47.256.734.28-.574.55-1.12.903-1.64.43-.632.893-1.249 1.699-1.682.063-.033.13-.056.195-.085.084-.022.033-.044 0-.066-.016-.048-.06-.082-.111-.112a.425.425 0 0 0-.19-.131 2.437 2.437 0 0 0-.596-.28c-.09-.035-.171-.083-.28-.088z" />
      </svg>
    ),
  },
  {
    link: 'https://www.linkedin.com/in/rifqiagniamubarok/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
    ),
  },
];

export default function Socmeds() {
  return (
    <div className="flex items-center gap-4">
      {dataSocmeds.map((s) => (
        <SocmedItem key={s.link} link={s.link} icon={s.icon} />
      ))}
    </div>
  );
}
