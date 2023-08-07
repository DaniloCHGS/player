import { useCurrentLesson } from "../store/slices/player";

export function Header() {
  const { currentModule, currentLesson, courseIsLoading } = useCurrentLesson();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">
        {courseIsLoading ? "Carregando..." : currentLesson?.title}
      </h1>
      <span className="text-sm text-zinc-400">
        Módulo "{courseIsLoading ? "Carregando..." : currentModule?.title}"
      </span>
    </div>
  );
}
