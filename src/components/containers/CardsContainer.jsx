import MainCard from "../cards/MainCard";
import TextAnimatedGradient from "../samples/TextAnimatedGradient";
import TextAnimationHorizontal from "../samples/TextAnimationHorizontal";
import TextShine from "../samples/TextShine";

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
