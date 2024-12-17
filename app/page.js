import React from "react";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="w-full min-h-dvh flex items-center justify-center gap-6 flex-col relative">
        <Image
          src="/img/golden crown.png"
          width={150}
          height={150}
          className="absolute opacity-25 top-10 left-20 rotate-45 top_bottom"
          alt="img"
        />

        <Image
          src="/img/checklist.png"
          width={100}
          height={100}
          className="absolute opacity-25 top-40 right-32 rotate-45 top_bottom"
          alt="img"
        />

        <Image
          src="/img/gift-box.png"
          width={150}
          height={150}
          className="absolute opacity-25 top-96 left-60 rotate-45 top_bottom"
          alt="img"
        />

        <Image
          src="/img/heart.png"
          width={80}
          height={80}
          className="absolute opacity-25 top-96 right-60 rotate-45 top_bottom"
          alt="img"
        />

        <Image
          src="/img/heart-calendar.png"
          width={80}
          height={80}
          className="absolute opacity-25 bottom-96 right-60 -rotate-45 top_bottom"
          alt="img"
        />

        <Image
          src="/img/todo.png"
          width={80}
          height={80}
          className="absolute opacity-25 left-72 top-60 -rotate-45 top_bottom"
          alt="img"
        />

        <div className="bg-slate-50 mx-auto w-96 text-center  rounded-full border border-slate-300 p-2 text-xl dark:bg-slate-900 dark:border-slate-600">
          <h2 className="bg-gradient-to-r from-orange-500 via-violet-500 to-blue-500 text-transparent bg-clip-text">
            ALL-in-One Productivity Companion
          </h2>
        </div>
        <h1 className="text-4xl font-bold tracking-wide text-slate-800 dark:text-slate-500 text-center mt-6">
          WE'VE GOT EVERYTHING YOU NEED TO STAY <br /> EFFICIENT AND ORGANIZED
        </h1>
        <p className="text-[18px] text-slate-500 dark:text-white w-[550px] text-center">
          Handle your tasks with ease! Organize to-dos, count words adjust text
          formatting, and more—all in one seamless app designed for productivity
        </p>
        <div className="p-2 w-[500px] flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/todo"
            className="bg-slate-100 px-4 py-2 text-center rounded-full border border-slate-400 dark:bg-slate-700"
          >
            GET STARTED
          </Link>

          <Link
            href="https://www.github.com/hameed305"
            className="bg-gradient-to-r from-blue-500 to-violet-500 text-white px-4 py-2 text-center rounded-full border border-slate-400 flex items-center justify-center gap-3 dark:border-slate-500"
          >
            <BsGithub />
            GITHUB
          </Link>
        </div>
      </div>
      <h1 className="text-2xl text-slate-700 dark:text-slate-300">
        <span className="bg-violet-500 p-1 rounded-full mr-4"></span>INCLUDE
        FEATURES
      </h1>
      <section className="w-full min-h-[60vh] flex items-center justify-center gap-6 flex-wrap p-3">
        <div className="w-full flex items-center justify-between flex-wrap">
          <Image src="/img/progress.gif" width={400} height={400} alt="img" />
          <div className="w-[600px] ">
            <h1 className="bg-gradient-to-r from-violet-500 via-orange-500 to-blue-500 text-transparent bg-clip-text text-4xl font-bold">
              TRACK YOUR LIFE PROGRESS
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              ipsa? Harum, voluptatibus velit. Alias odio eaque nostrum
              recusandae dolores? Placeat, officiis dolorem dolorum minus ipsam
              sequi vitae distinctio saepe nobis.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between flex-wrap">
          <div className="w-[600px] ">
            <h1 className="bg-gradient-to-r from-violet-500 via-orange-500 to-blue-500 text-transparent bg-clip-text text-4xl font-bold">
              CREATE, EDITE AND DELETE YOUR TODOS
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              ipsa? Harum, voluptatibus velit. Alias odio eaque nostrum
              recusandae dolores? Placeat, officiis dolorem dolorum minus ipsam
              sequi vitae distinctio saepe nobis.
            </p>
          </div>
          <Image src="/img/todolist.gif" width={400} height={400} alt="img" />
        </div>

        <div className="w-full flex items-center justify-between flex-wrap">
          <Image src="/img/progress.png" width={400} height={400} alt="img" />
          <div className="w-[600px] ">
            <h1 className="bg-gradient-to-r from-violet-500 via-orange-500 to-blue-500 text-transparent bg-clip-text text-4xl font-bold">
              TRACK YOUR LIFE PROGRESS
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              ipsa? Harum, voluptatibus velit. Alias odio eaque nostrum
              recusandae dolores? Placeat, officiis dolorem dolorum minus ipsam
              sequi vitae distinctio saepe nobis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
