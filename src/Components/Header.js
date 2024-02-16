export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 h-16 w-full bg-white border-b-2 dark:text-white">
      <h1 className="font-bold text-sm table:text-2xl">Where in the world?</h1>
      <button className="text-sm font-medium border border-black px-2 py-2">
        Dark mode
      </button>
    </header>
  );
}
