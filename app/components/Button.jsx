import { BsGithub } from "react-icons/bs";
function Button() {
  return (
    <button className="relative overflow-hidden rounded-lg px-20 py-6 flex items-center justify-center">
      <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-300">
        <BsGithub className="mx-3" />
        Github
      </span>

      <span
        aria-hidden
        className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
      />
    </button>
  );
}
export default Button;
