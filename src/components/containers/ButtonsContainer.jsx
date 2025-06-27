import React from "react";
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
import MainCard from "../cards/MainCard";

function ButtonsContainer() {
  return (
    <div className="hide-scrollbar grid h-[calc(100vh-100px)] grid-cols-1 gap-8 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      <MainCard
        title="Button Glow"
        effect={<ButtonGlow>Click Me</ButtonGlow>}
      />

      <MainCard
        title="Button Pulse"
        effect={<ButtonPulse>Click Me</ButtonPulse>}
      />

      <MainCard
        title="Button Slide In"
        effect={<ButtonSlideIn>Click Me</ButtonSlideIn>}
      />

      <MainCard
        title="Button Slide Out"
        effect={<ButtonSlideOut>Click Me</ButtonSlideOut>}
      />

      <MainCard
        title="Button Border Glow"
        effect={<ButtonBorderGlow>Click Me</ButtonBorderGlow>}
      />

      <MainCard
        title="Button Bounce"
        effect={<ButtonBounce>Click Me</ButtonBounce>}
      />

      <MainCard
        title="Button Ripple"
        effect={<ButtonRipple>Click Me</ButtonRipple>}
      />

      <MainCard
        title="Button Gradient Shift"
        effect={<ButtonGradientShift>Click Me</ButtonGradientShift>}
      />

      <MainCard
        title="Button Wiggle"
        effect={<ButtonWiggle>Click Me</ButtonWiggle>}
      />

      <MainCard
        title="Button Scale"
        effect={<ButtonScale>Click Me</ButtonScale>}
      />
    </div>
  );
}

export default ButtonsContainer;
