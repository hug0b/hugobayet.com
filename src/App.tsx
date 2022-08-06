import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaKaggle } from "react-icons/fa";
import SocialButton from "./components/SocialButton";
import Title from "./components/Title";

const iconSize = "2rem";

const socials = {
  github: {
    link: "https://github.com/hug0b",
    description: "Github",
  },
  linkedin: {
    link: "https://www.linkedin.com/in/hugobayet",
    description: "LinkedIn",
  },
  kaggle: {
    link: "https://www.kaggle.com/hugobayet",
    description: "Kaggle",
  },
};

export function App() {
  return (
    <main>
      <Title />

      <div className="socials">
        <SocialButton
          href={socials.github.link}
          text={socials.github.description}
        >
          <IoLogoGithub size={iconSize} />
        </SocialButton>
        <SocialButton
          href={socials.linkedin.link}
          text={socials.linkedin.description}
        >
          <IoLogoLinkedin size={iconSize} />
        </SocialButton>
        <SocialButton
          href={socials.kaggle.link}
          text={socials.kaggle.description}
        >
          <FaKaggle size={iconSize} />
        </SocialButton>
      </div>
    </main>
  );
}
