import { useCallback, useEffect, useRef } from "react";

export const useObserver = (cb: () => void) => {
    const ref = useRef<IntersectionObserver | null>(null);
    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    }, [cb]);
    
    return useCallback((node: HTMLDivElement | null) => {
        if (ref.current) ref.current.disconnect();

        if (node) {
            const options = { threshold: [0.5] };
            ref.current = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
                if (entry.isIntersecting) {
                    callbackRef.current();
                }
            }, options);
    
            ref.current?.observe(node);
        }
    }, []);
};
