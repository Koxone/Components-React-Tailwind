import MainCard from "../cards/MainCard";
import TextAnimatedGradient from "../samples/text/TextAnimatedGradient";
import TextAnimationHorizontal from "../samples/text/TextAnimationHorizontal";
import TextBounce from "../samples/text/TextBounce";
import TextColorCycle from "../samples/text/TextColorCycle";
import TextFadeIn from "../samples/text/TextFadeIn";
import TextPulse from "../samples/text/TextPulse";
import TextRotate from "../samples/text/TextRotate";
import TextScalePulse from "../samples/text/TextScalePlus";
import TextShine from "../samples/text/TextShine";
import TextTypewriter from "../samples/text/TextTypewriter";
import TextWave from "../samples/text/TextWave";
import TextWiggle from "../samples/text/TextWiggle";
import TextSlideInLeft from "../samples/text/TextSlideInLeft";
import TextSlideInRight from "../samples/text/TextSlideInRight";
import TextFadeLoop from "../samples/text/TextFadeLoop";
import TextSkewLoop from "../samples/text/TextSkewLoop";
import TextScaleLoop from "../samples/text/TextScaleLoop";
import TextSpinLoop from "../samples/text/TextSpinLoop";

const cards = [
  { title: "Text Animated Gradient", Component: TextAnimatedGradient },
  { title: "Text Shine", Component: TextShine },
  { title: "Text Animation Horizontal", Component: TextAnimationHorizontal },
  { title: "Text Fade In", Component: TextFadeIn },
  { title: "Text Typewriter", Component: TextTypewriter },
  { title: "Text Wave", Component: TextWave },
  { title: "Text Bounce", Component: TextBounce },
  { title: "Text Color Cycle", Component: TextColorCycle },
  { title: "Text Pulse", Component: TextPulse },
  { title: "Text Rotate", Component: TextRotate },
  { title: "Text Scale Plus", Component: TextScalePulse },
  { title: "Text Wiggle", Component: TextWiggle },
  { title: "Text Slide In Left", Component: TextSlideInLeft },
  { title: "Text Slide In Right", Component: TextSlideInRight },
  { title: "Text Fade Loop", Component: TextFadeLoop },
  { title: "Text Skew Loop", Component: TextSkewLoop },
  { title: "Text Scale Loop", Component: TextScaleLoop },
  { title: "Text Spin Loop", Component: TextSpinLoop },
];

function CardsContainer() {
  return (
    <div className="hide-scrollbar grid h-[calc(100vh-100px)] grid-cols-1 gap-8 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      {cards.map(({ title, Component }, index) => (
        <MainCard
          key={index}
          title={title}
          effect={<Component>Sample Text</Component>}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
