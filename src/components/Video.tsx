import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next } from "../store/slices/player";

interface VideoProps {}

export function Video({}: VideoProps) {
  const dispatch = useDispatch();

  const currentLesson = useAppSelector((store) => {
    const { currentModuleIndex, currentLessonIndex } = store.player;
    const lesson =
      store.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];
    return lesson;
  });

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
