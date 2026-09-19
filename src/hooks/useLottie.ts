import { useEffect, useRef } from "react";
import lottie, {
  AnimationConfigWithData,
  AnimationConfigWithPath,
  AnimationItem,
} from "lottie-web";

const useLottie = (
  animationData: string | object,
  extra?: Omit<AnimationConfigWithData, "animationData" | "path">
) => {
  const lottieRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      let config: AnimationConfigWithData | AnimationConfigWithPath = {
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        ...extra,
      };

      if (typeof animationData === "string") {
        config = { ...config, path: animationData } as AnimationConfigWithPath;
      } else {
        config = { ...config, animationData } as AnimationConfigWithData;
      }

      animationRef.current = lottie.loadAnimation(config);

      return () => {
        animationRef.current?.destroy();
      };
    }
  }, [animationData, extra]);

  return lottieRef;
};

export default useLottie;
