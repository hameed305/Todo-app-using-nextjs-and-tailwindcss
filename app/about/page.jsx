import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaCoffee,
  FaDribbble,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiEjs,
} from "react-icons/si";

export default function About() {
  return (
    <div className="">
      <div className="container mx-auto p-8">
        <div className="bg-white dark:bg-gray-900 bg-opacity-10 dark:bg-opacity-90 p-8 rounded-3xl shadow-2xl text-center">
          <div className="mx-auto mb-3 rounded-full flex items-center justify-center">
            <Image src="/logo.png" alt="Image" width={300} height={300} />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Hameed Jan
          </h1>
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Location: Quetta, Pakistan
          </p>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Education: Matric
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            WHAT HAVE I LEARNED ?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            {[
              {
                name: "HTML",
                icon: <FaHtml5 />,
                style: "from-red-500 to-orange-500",
              },
              {
                name: "CSS",
                icon: <FaCss3Alt />,
                style: "from-blue-500 to-cyan-500",
              },
              {
                name: "JavaScript",
                icon: <FaJsSquare />,
                style: "from-yellow-400 to-yellow-600",
              },
              {
                name: "Node.js",
                icon: <FaNodeJs />,
                style: "from-green-500 to-teal-500",
              },
              {
                name: "React.js",
                icon: <FaReact />,
                style: "from-blue-400 to-blue-600",
              },
              {
                name: "MongoDB",
                icon: <SiMongodb />,
                style: "from-green-400 to-green-600",
              },
              {
                name: "EJS",
                icon: <SiEjs />,
                style: "from-purple-500 to-indigo-500",
              },
              {
                name: "TailwindCSS",
                icon: <SiTailwindcss />,
                style: "from-teal-400 to-cyan-400",
              },
              {
                name: "Next.js",
                icon: <SiNextdotjs />,
                style: "from-gray-800 to-gray-600",
              },
              {
                name: "Express",
                icon: <SiExpress />,
                style: "from-gray-600 to-gray-800",
              },
            ].map(({ name, icon, style }) => (
              <div
                key={name}
                className={`flex-wrap py-2 px-4 bg-gradient-to-r ${style} rounded-lg flex items-center text-white`}
              >
                <span className="text-2xl mr-2">{icon}</span>
                {name}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-900 dark:text-gray-100">
            Links
          </h2>
          <div className="flex justify-center space-x-6 text-lg flex-wrap gap-4 max-sm:items-start max-md:justify-start">
            <Link
              href="https://github.com/hameed305"
              target="_blank"
              className="hover:underline flex items-center text-gray-800 dark:text-gray-200"
            >
              <FaGithub className="text-2xl mr-2" />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              className="hover:underline flex items-center text-blue-500"
            >
              <FaLinkedin className="text-2xl mr-2" />
              LinkedIn
            </Link>
            <Link
              href="https://www.fiverr.com/hameedkhan305/buying?source=avatar_menu_profile"
              target="_blank"
              className="hover:underline flex items-center text-green-500"
            >
              Fiverr
            </Link>
            <Link
              href="https://buymeacoffee.com/khannigar3u"
              target="_blank"
              className="hover:underline flex items-center text-yellow-500"
            >
              <FaCoffee className="text-2xl mr-2" />
              Buy Me a Coffee
            </Link>
            <Link
              href="https://dribbble.com/master_designd"
              target="_blank"
              className="hover:underline flex items-center text-pink-500"
            >
              <FaDribbble className="text-2xl mr-2" />
              Dribbble
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
