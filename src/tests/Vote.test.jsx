import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Poll from "../components/poll/Poll";
import Vote from "../components/vote/Vote";
import { sendData, fetchData } from "../helpers/network";
import { act } from "react";
import getTestData from "./testData";

vi.mock("../helpers/network.js", () => ({
  fetchData: vi.fn(),
  sendData: vi.fn(),
}));

fetchData.mockImplementation(async () => {
  return getTestData();
});

const renderVote = () => {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route index element={<Vote />} />
        <Route path="/poll" element={<Poll />} />
      </Routes>
    </MemoryRouter>,
  );
};

describe("Vote", () => {
  it("The component UI should not change", async () => {
    expect(await act(async () => renderVote())).toMatchSnapshot();
  });

  it("renders correct teams", async () => {
    await act(async () => renderVote());
    screen.getByText("Liverpool");
    screen.getByText("Manchester City");
    screen.getByText("Arsenal");
    screen.getByText("Liverpool");
    screen.getByText("West Ham United");
  });

  it("sends correct vote", async () => {
    await act(async () => renderVote());

    await act(async () => {
      screen.getByText("Liverpool").click();
    });

    await act(async () => {
      screen.getByText("Submit").click();
    });

    expect(sendData).toBeCalledTimes(1);
    expect(sendData).toHaveBeenCalledWith("http://localhost:8080/vote", {
      pollId: 1,
      name: "Liverpool",
    });
  });
});
