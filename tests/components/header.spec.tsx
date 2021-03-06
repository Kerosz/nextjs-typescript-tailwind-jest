import { render } from "@testing-library/react";
import Header from "../../src/components/header";

describe("<Header />", () => {
  it("should render without errors", () => {
    const { getByText } = render(<Header />);

    expect(getByText(/header/i)).toBeTruthy();
  });
});
