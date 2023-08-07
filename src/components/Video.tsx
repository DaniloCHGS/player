import ReactPlayer from "react-player";
import { next, useCurrentLesson } from "../store/slices/player";
import { useAppDispatch, useAppSelector } from "../store";
import { Loader } from "lucide-react";

interface VideoProps {}

export function Video({}: VideoProps) {
  const dispatch = useAppDispatch();

  const { currentLesson, courseIsLoading } = useCurrentLesson();
  function handleplayNext() {
    dispatch(next());
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
