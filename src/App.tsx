import { Header } from "@/features/header";

function App() {
  return (
    <main className="text-neutral-800 dark:text-neutral-300">
      <article className="container max-w-2xl px-4 mx-auto mt-28">
        <div>
          <Header className="mb-6" />
          <p className="font-mono">
            I am a professional web developer based near Fort Lauderdale,
            specialized in the development of modern websites, apps, tools, and
            everything in between.
          </p>
        </div>
      </article>
    </main>
  );
}

export default App;
