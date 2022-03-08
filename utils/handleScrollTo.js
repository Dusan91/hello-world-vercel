const scrollProps = {
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest',
};

const handleScrollTo = refs => type => {
  const element = refs[type];
  element.current.scrollIntoView(scrollProps);
};

export default handleScrollTo;
