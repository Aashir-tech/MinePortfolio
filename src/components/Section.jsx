import { useEffect , useRef } from "react";

export const Section = ({ id, children, setActiveSection , className }) => {
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.5, // When 50% of the section is visible
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, [id, setActiveSection]);
  
    return (
      <section
        ref={sectionRef}
        id={id}
        className={`flex flex-col justify-center items-center py-5 snap-start ${className}`}
      >
        {children}
      </section>
    );
  };