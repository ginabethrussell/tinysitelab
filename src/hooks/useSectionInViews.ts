import{ useInView } from 'react-intersection-observer';

export function useSectionInViews() {
  const [homeRef, homeInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3 });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.3 });

  return [
    { id: 'home', ref: homeRef, inView: homeInView },
    { id: 'about', ref: aboutRef, inView: aboutInView },
    { id: 'services', ref: servicesRef, inView: servicesInView },
    { id: 'portfolio', ref: portfolioRef, inView: portfolioInView },
    { id: 'contact', ref: contactRef, inView: contactInView },
  ];
}
