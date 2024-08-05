import { GithubIcon } from "@/public/GithubIcon";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <section className="flex flex-col gap-2 py-10">
        <h1 className="text-5xl font-bold">Make good websites with me!</h1>
        <p className="text-lg text-zinc-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
          <button className="inline mt-2 rounded-md bg-zinc-700 hover:bg-zinc-600 px-6 py-2 transition duration-200">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
