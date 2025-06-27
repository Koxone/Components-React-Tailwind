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
import TextWiggle from "../samples/TextWiggle";
import TextSlideInLeft from "../samples/TextSlideInLeft";
import TextSlideInRight from "../samples/TextSlideInRight";
import TextFadeLoop from "../samples/TextFadeLoop";
import TextSkewLoop from "../samples/TextSkewLoop";
import TextScaleLoop from "../samples/TextScaleLoop";
import TextSpinLoop from "../samples/TextSpinLoop";

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
        title="Text Wiggle"
        effect={<TextWiggle>Sample Text</TextWiggle>}
      />
      <MainCard
        title="Text Slide In Left"
        effect={<TextSlideInLeft>Sample Text</TextSlideInLeft>}
      />
      <MainCard
        title="Text Slide In Right"
        effect={<TextSlideInRight>Sample Text</TextSlideInRight>}
      />
      <MainCard
        title="Text Fade Loop"
        effect={<TextFadeLoop>Sample Text</TextFadeLoop>}
      />
      <MainCard
        title="Text Skew Loop"
        effect={<TextSkewLoop>Sample Text</TextSkewLoop>}
      />
      <MainCard
        title="Text Scale Loop"
        effect={<TextScaleLoop>Sample Text</TextScaleLoop>}
      />
      <MainCard
        title="Text Spin Loop"
        effect={<TextSpinLoop>Sample Text</TextSpinLoop>}
      />
    </div>
  );
}

export default CardsContainer;
