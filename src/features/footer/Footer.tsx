
export function Footer() {
  return (
    <footer className="py-4 text-sm border-t-2 border-natural-400 dark:border-neutral-700 text-neutral-400 bg-background">
      <div className="container flex justify-between max-w-3xl px-10 mx-auto">
        <div className="inline-flex items-center gap-2">
          <img
            src="/svg/favicon/person.svg"
            alt="person icon"
            className="w-5 h-5"
          />
          <span>Thanks visiting my portfolio</span>
        </div>
        <p>2025</p>
      </div>
    </footer>
  );
}
