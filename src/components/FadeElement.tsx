import React, {
  createRef,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { cnx } from '@grandlinex/react-components';

export default function FadeElement({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  const domRef = createRef<HTMLDivElement>();

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return () => {};
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [domRef]);

  return (
    <div
      ref={domRef}
      className={cnx(className, 'fade-element', [isVisible, ' is-visible'])}
    >
      {children}
    </div>
  );
}
FadeElement.defaultProps = {
  className: undefined,
};
