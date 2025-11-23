import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {
  expect(screen.getByText("Now")).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  expect(screen.getByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  expect(screen.getByTitle("time video")).toBeInTheDocument(); // must exist
});


//   it('should include "Now" in the header instead of a time', () => {
//     expect(wrapper.find('header').text()).to.not.include(moment().format('MMMM Do YYYY'))
//     expect(wrapper.find('header').text()).to.include('Now')
//   });


//   it('should include the ExampleComponent', () => {
//     expect(wrapper.text()).to.include('<ExampleComponent />')
//   });

//   it('should include the TestComponent', () => {
//     expect(wrapper.text()).to.include('<TestComponent />')
//   });
// });
