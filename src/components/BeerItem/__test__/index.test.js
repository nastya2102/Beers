import React from "react";
import { render } from "@testing-library/react";
import BeerItem from "../index";

describe("BeerItem", () => {
  test("should render BeerItem component", () => {
    const { container } = render(
      <BeerItem
        name={true}
        image_url={"//"}
        tagline={<span>123</span>}
        abv={<span>457</span>}
        description={<span>457</span>}
        first_brewed={<span>457</span>}
        brewers_tips={<span>457</span>}
      />
    );

    expect(container).toBeTruthy();
  });

  test("should match snapshot BeerItem component", () => {
    const { container } = render(
      <BeerItem
        name={true}
        image_url={"//"}
        tagline={<span>123</span>}
        abv={<span>457</span>}
        description={<span>457</span>}
        first_brewed={<span>457</span>}
        brewers_tips={<span>457</span>}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
