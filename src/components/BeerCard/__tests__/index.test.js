import React from "react";
import { render } from "@testing-library/react";
import BeerCard from "../index";

describe("BeerCard", () => {
  test("should render BeerCard component", () => {
    const { container } = render(
      <BeerCard
        name={true}
        image_url={"//"}
        tagline={<span>123</span>}
        abv={<span>457</span>}
        handleClickBeer={() => {}}
        id={1}
      />
    );

    expect(container).toBeTruthy();
  });

  test("should match snapshot BeerCard component", () => {
    const { container } = render(
      <BeerCard
        name={true}
        image_url={"//"}
        tagline={<span>123</span>}
        abv={<span>457</span>}
        handleClickBeer={() => {}}
        id={1}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
