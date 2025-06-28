export default function ButtonShootingStarBorder() {
  return (
    <button className="button-shooting-star group relative grid overflow-hidden rounded-full px-4 py-2 shadow-[inset_0_1000px_0_0_hsl(0_0%_20%)] transition-colors duration-200">
      <span className="spark absolute inset-0 h-full w-full animate-[flip_6s_steps(2,end)_infinite] before:absolute before:inset-0 before:animate-[rotate_3s_linear_infinite]"></span>
      <span className="absolute inset-[3px] rounded-full bg-blue-600 transition-colors duration-200 group-hover:bg-neutral-800"></span>
      <span className="relative z-10 py-0.5 text-lg text-neutral-100">
        Get notified
      </span>
    </button>
  );
}
