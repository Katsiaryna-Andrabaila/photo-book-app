import { useCallback, useRef } from "react";

export const useObserver = (cb: () => void) => {
    const ref = useRef<HTMLDivElement>(null);
    
    return useCallback((node: HTMLDivElement) => {
        const onEntry = (entry: IntersectionObserverEntry[]) => {
            if (entry[0].isIntersecting) {
                cb();
            }
        };

        const options = { threshold: [0.5] };
        const observer = new IntersectionObserver(onEntry, options);

        const { current } = ref;

        if (node) observer.observe(node);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [cb]);
};
