import Home from "@/app/home";
import { render, screen } from "@testing-library/react-native";
describe("App:Home", () => {
  it("renders correctly", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeTruthy();
  });
});
