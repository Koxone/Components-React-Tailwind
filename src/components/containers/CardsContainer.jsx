import MainCard from "../cards/MainCard";
import TextAnimatedGradient from "../samples/TextAnimatedGradient";
import TextAnimationHorizontal from "../samples/TextAnimationHorizontal";
import TextBounce from "../samples/TextBounce";
import TextColorCycle from "../samples/TextColorCycle";
import TextFadeIn from "../samples/TextFadeIn";
import TextPulse from "../samples/TextPulse";
import TextRotate from "../samples/TextRotate";
import TextScalePulse from "../samples/TextScalePlus";
import TextShine from "../samples/TextShine";
import TextTypewriter from "../samples/TextTypewriter";
import TextWave from "../samples/TextWave";

MainCard;

function CardsContainer() {
  return (
    <div className="hide-scrollbar grid h-[calc(100vh-100px)] grid-cols-1 gap-8 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      <MainCard
        title="Text Animated Gradient"
        effect={<TextAnimatedGradient>Sample Text</TextAnimatedGradient>}
      />
      <MainCard
        title="Text Shine"
        effect={<TextShine>Sample Text</TextShine>}
      />
      <MainCard
        title="Text Animation Horizontal"
        effect={<TextAnimationHorizontal>Sample Text</TextAnimationHorizontal>}
      />
      <MainCard
        title="Text Fade In"
        effect={<TextFadeIn>Sample Text</TextFadeIn>}
      />
      <MainCard
        title="Text Typewriter"
        effect={<TextTypewriter>Sample Text</TextTypewriter>}
      />
      <MainCard title="Text Wave" effect={<TextWave>Sample Text</TextWave>} />

      <MainCard
        title="Text Bounce"
        effect={<TextBounce>Sample Text</TextBounce>}
      />
      <MainCard
        title="Text Color Cycle"
        effect={<TextColorCycle>Sample Text</TextColorCycle>}
      />
      <MainCard
        title="Text Pulse"
        effect={<TextPulse>Sample Text</TextPulse>}
      />
      <MainCard
        title="Text Rotate"
        effect={<TextRotate>Sample Text</TextRotate>}
      />
      <MainCard
        title="Text Scale Plus"
        effect={<TextScalePulse>Sample Text</TextScalePulse>}
      />
      <MainCard
        title="Text Animation Horizontal"
        effect={<TextAnimationHorizontal>Sample Text</TextAnimationHorizontal>}
      />
      <MainCard
        title="Text Animated Gradient"
        effect={<TextAnimatedGradient>Sample Text</TextAnimatedGradient>}
      />
      <MainCard
        title="Text Shine"
        effect={<TextShine>Sample Text</TextShine>}
      />
      <MainCard
        title="Text Animation Horizontal"
        effect={<TextAnimationHorizontal>Sample Text</TextAnimationHorizontal>}
      />
      <MainCard
        title="Text Animated Gradient"
        effect={<TextAnimatedGradient>Sample Text</TextAnimatedGradient>}
      />
      <MainCard
        title="Text Shine"
        effect={<TextShine>Sample Text</TextShine>}
      />
      <MainCard
        title="Text Animation Horizontal"
        effect={<TextAnimationHorizontal>Sample Text</TextAnimationHorizontal>}
      />
    </div>
  );
}

export default CardsContainer;
