import ReactPlayer from "react-player";
import { Loader } from "lucide-react";
import { useStore } from "../zustand-store";

interface VideoProps {}

export function Video({}: VideoProps) {
  const { currentLesson, courseIsLoading, next } = useStore((store) => {
    return {
      courseIsLoading: store.isLoading,
      currentLesson:
        store.course?.modules[store.currentModuleIndex].lessons[
          store.currentLessonIndex
        ],
      next: store.next,
    };
  });

  function handleplayNext() {
    next();
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {courseIsLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="text-zinc-100 h-5 w-5 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handleplayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}
