import { FunctionComponent } from "preact";

interface Tooltip {
  text: string;
}

const Tooltip: FunctionComponent<Tooltip> = ({ children, text }) => {
  return (
    <div className="tooltip">
      <span className="tooltiptext">{text}</span>
      {children}
    </div>
  );
};

export default Tooltip;
