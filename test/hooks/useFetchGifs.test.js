import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("Pruebas en useFechGifs()", () => {
  test("debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe deretornar un arreglo de imagenes y isLoagin en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
