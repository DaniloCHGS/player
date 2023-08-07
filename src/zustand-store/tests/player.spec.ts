import { beforeEach, describe, expect, it } from "vitest";
import { useStore as store } from "..";

const course = {
  id: 1,
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
        {
          id: "w-DW4DhDfcw",
          title: "Estilização do Post",
          duration: "10:05",
        },
        {
          id: "D83-55LUdKE",
          title: "Componente: Header",
          duration: "06:33",
        },
        {
          id: "W_ATsETujaY",
          title: "Componente: Sidebar",
          duration: "09:12",
        },
        { id: "Pj8dPeameYo", title: "CSS Global", duration: "03:23" },
        {
          id: "8KBq2vhwbac",
          title: "Form de comentários",
          duration: "11:34",
        },
      ],
    },
    {
      id: 2,
      title: "Estrutura da aplicação",
      lessons: [
        {
          id: "gE48FQXRZ_o",
          title: "Componente: Comment",
          duration: "13:45",
        },
        { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
        {
          id: "h5JA3wfuW1k",
          title: "Interações no JSX",
          duration: "06:33",
        },
        {
          id: "1G0vSTqWELg",
          title: "Utilizando estado",
          duration: "09:12",
        },
      ],
    },
  ],
};

const initialState = store.getState();

describe("player slice", () => {
  beforeEach(() => store.setState(initialState));

  it("it should be possible to play a video", () => {
    const { play } = store.getState();

    play([0, 1]);

    const { currentModuleIndex, currentLessonIndex } = store.getState();

    expect(currentModuleIndex).toEqual(0);
    expect(currentLessonIndex).toEqual(1);
  });

  it("it should be possible to play the next video automatically", () => {
    store.setState({ course });

    const { next } = store.getState();

    next();

    const { currentModuleIndex, currentLessonIndex } = store.getState();

    expect(currentModuleIndex).toEqual(0);
    expect(currentLessonIndex).toEqual(1);
  });

  it("it should be possible to run the next video of the next module", () => {
    store.setState({ course, currentModuleIndex: 0, currentLessonIndex: 5 });

    const { next } = store.getState();

    next();

    const { currentModuleIndex, currentLessonIndex } = store.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(0);
  });

  it("it should not be possible to play the next video when there are no more videos", () => {
    store.setState({ course, currentModuleIndex: 1, currentLessonIndex: 3 });

    const { next } = store.getState();

    next();

    const { currentModuleIndex, currentLessonIndex } = store.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(3);
  });
});
