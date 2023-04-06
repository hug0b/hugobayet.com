import { FunctionComponent } from "preact";
import Tooltip from "./Tooltip";

interface SocialButtonProps {
  href: string;
  text: string;
}

const SocialButton: FunctionComponent<SocialButtonProps> = ({
  children,
  href,
  text,
}) => {
  return (
    <Tooltip text={text}>
      <span className="social-icon">
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Go to my ${text}`}>
          {children}
        </a>
      </span>
    </Tooltip>
  );
};

export default SocialButton;
