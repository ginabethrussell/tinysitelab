import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveId(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '0px 0px 0px 0px', // this triggers earlier
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  useEffect(() => {
    const handleTopScroll = () => {
      if (window.scrollY < 50) {
        setActiveId('home');
      }
    };

    window.addEventListener('scroll', handleTopScroll);
    return () => window.removeEventListener('scroll', handleTopScroll);
  }, []);

  return activeId;
}
