import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid()", () => {
  const category = "One Punch";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan las imagenes mediante el useFechGif", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Goku",
        url: "https://localhost/Goku.jpg",
      },
      {
        id: "CBA",
        title: "Lara",
        url: "https://localhost/Lara.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
