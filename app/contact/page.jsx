import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";
export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center gap-4 justify-center transition-colors p-4">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/img/form.gif"
          width={500}
          height={500}
          alt="img"
          className="max-w-full h-auto"
        />
      </div>
      {/* Contact Form */}
      <div className="flex flex-col bg-white dark:bg-gray-900 dark:text-white p-8 rounded-lg shadow-lg w-full max-w-md mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-gradientStart dark:text-gradientEnd mb-4 text-center md:text-left">
          Contact Us
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 dark:border-gray-700 bg-transparent p-3 rounded focus:outline-none focus:ring-2 focus:ring-gradientStart dark:focus:ring-gradientEnd"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 dark:border-gray-700 bg-transparent p-3 rounded focus:outline-none focus:ring-2 focus:ring-gradientStart dark:focus:ring-gradientEnd"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 dark:border-gray-700 bg-transparent p-3 rounded focus:outline-none focus:ring-2 focus:ring-gradientStart dark:focus:ring-gradientEnd"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-gradientStart to-gradientEnd py-3 rounded shadow hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Icons */}
        <div className="mt-8 flex justify-around text-xl">
          <a
            href="mailto:example@example.com"
            className="text-gradientStart dark:text-gradientEnd hover:scale-110 transition"
          >
            <AiOutlineMail size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradientStart dark:text-gradientEnd hover:scale-110 transition"
          >
            <AiFillLinkedin size={30} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradientStart dark:text-gradientEnd hover:scale-110 transition"
          >
            <AiOutlineGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
