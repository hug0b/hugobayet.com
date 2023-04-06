import { useState } from "preact/hooks";

const Title = () => {
  const [magicActive, setMagicActive] = useState(false);

  function onTitleClick(): void {
    setMagicActive(true);
    setTimeout(() => {
      setMagicActive(false);
    }, 500);
  };

  return (
    <>
      <div id="title">
        <div className="glitch-container">
          {!magicActive ? (
            <h1 id="main-title" onClick={onTitleClick}>
              Hugo Bayet
            </h1>
          ) : (
            <h1 className="glitch">
              <span aria-hidden="true">Hugo Bayet</span>
              Hugo Bayet
              <span aria-hidden="true">Hugo Bayet</span>
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Title;
