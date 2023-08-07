import ReactPlayer from "react-player";
import { next, useCurrentLesson } from "../store/slices/player";
import { useAppDispatch } from "../store";

interface VideoProps {}

export function Video({}: VideoProps) {
  const dispatch = useAppDispatch();

  const { currentLesson } = useCurrentLesson();

  if (!currentLesson) {
    return null;
  }

  function handleplayNext() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handleplayNext}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  );
}
