import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Poll from "../components/poll/Poll";
import { act } from "react";
import getTestData from "./testData";
import { fetchData } from "../helpers/network";

vi.mock("../helpers/network.js", () => ({
  fetchData: vi.fn(),
}));

fetchData.mockImplementation(async () => {
  return getTestData();
});

describe("Poll", async () => {
  it("The component UI should not change", async () => {
    const component = await act(async () => render(<Poll />));
    expect(component).toMatchSnapshot();
  });

  it("renders correct percentage", async () => {
    await act(async () => render(<Poll />));

    const getPercent = (team) =>
      screen.getByText(team).nextSibling.textContent.trim();

    expect(getPercent("Liverpool")).toBe("50.0%");
    expect(getPercent("Manchester City")).toBe("30.0%");
    expect(getPercent("Arsenal")).toBe("20.0%");
    expect(getPercent("Manchester United")).toBe("6.00%");
    expect(getPercent("West Ham United")).toBe("4.00%");
  });
});
