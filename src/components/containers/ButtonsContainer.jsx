import MainCard from "../cards/MainCard";

import ButtonGlow from "../samples/buttons/ButtonGlow";
import ButtonPulse from "../samples/buttons/ButtonPulse";
import ButtonSlideIn from "../samples/buttons/ButtonSlideIn";
import ButtonSlideOut from "../samples/buttons/ButtonSlideOut";
import ButtonBorderGlow from "../samples/buttons/ButtonBorderGlow";
import ButtonBounce from "../samples/buttons/ButtonBounce";
import ButtonRipple from "../samples/buttons/ButtonRipple";
import ButtonGradientShift from "../samples/buttons/ButtonGradientShift";
import ButtonWiggle from "../samples/buttons/ButtonWiggle";
import ButtonScale from "../samples/buttons/ButtonScale";
import ButtonFlash from "../samples/buttons/ButtonFlash";
import ButtonFlip from "../samples/buttons/ButtonFlip";
import ButtonRotate from "../samples/buttons/ButtonRotate";
import ButtonSwing from "../samples/buttons/ButtonSwing";
import ButtonShadowPulse from "../samples/buttons/ButtonShadowPulse";
import ButtonTilt from "../samples/buttons/ButtonTilt";
import ButtonShimmer from "../samples/buttons/ButtonShimmer";
import ButtonHeartbeat from "../samples/buttons/ButtonHeartbeat";
import ButtonGlowBorder from "../samples/buttons/ButtonGlowBorder";
import ButtonDiagonalSlide from "../samples/buttons/ButtonDiagonalSlide";

const buttons = [
  { title: "Button Glow", Component: ButtonGlow },
  { title: "Button Pulse", Component: ButtonPulse },
  { title: "Button Slide In", Component: ButtonSlideIn },
  { title: "Button Slide Out", Component: ButtonSlideOut },
  { title: "Button Border Glow", Component: ButtonBorderGlow },
  { title: "Button Bounce", Component: ButtonBounce },
  { title: "Button Ripple", Component: ButtonRipple },
  { title: "Button Gradient Shift", Component: ButtonGradientShift },
  { title: "Button Wiggle", Component: ButtonWiggle },
  { title: "Button Scale", Component: ButtonScale },
  { title: "Button Flash", Component: ButtonFlash },
  { title: "Button Flip", Component: ButtonFlip },
  { title: "Button Rotate", Component: ButtonRotate },
  { title: "Button Swing", Component: ButtonSwing },
  { title: "Button Shadow Pulse", Component: ButtonShadowPulse },
  { title: "Button Tilt", Component: ButtonTilt },
  { title: "Button Shimmer", Component: ButtonShimmer },
  { title: "Button Heartbeat", Component: ButtonHeartbeat },
  { title: "Button Glow Border", Component: ButtonGlowBorder },
  { title: "Button Diagonal Slide", Component: ButtonDiagonalSlide },
];

function ButtonsContainer() {
  return (
    <div className="hide-scrollbar grid h-[calc(100vh-100px)] grid-cols-1 gap-8 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      {buttons.map(({ title, Component }, index) => (
        <MainCard
          key={index}
          title={title}
          effect={<Component>Click Me</Component>}
        />
      ))}
    </div>
  );
}

export default ButtonsContainer;
