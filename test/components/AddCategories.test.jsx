import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategories } from "../../src/components/AddCategories";

describe("Pruebas en AddCategories()", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    const onewCategorie = jest.fn();
    render(<AddCategories onewCategorie={onewCategorie} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
    screen.debug();
  });

  test("debe de llamar onewCategories si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onewCategorie = jest.fn();

    render(<AddCategories onewCategorie={onewCategorie} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");

    expect(onewCategorie).toHaveBeenCalled(); //haber sido llamado
    expect(onewCategorie).toHaveBeenCalledTimes(1); //haber sido llamado 1 vez
    expect(onewCategorie).toHaveBeenCalledWith(inputValue); //haber sido llamado con el valor del input
  });

  test("no debe llamar el onewCategories si el input esta vacio", () => {
    const onewCategorie = jest.fn();

    render(<AddCategories onewCategorie={onewCategorie} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onewCategorie).toHaveBeenCalledTimes(0);
    expect(onewCategorie).not.toHaveBeenCalled();

    screen.debug();
  });
});
