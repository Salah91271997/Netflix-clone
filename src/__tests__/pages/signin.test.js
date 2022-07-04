import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { SignIn } from "../../pages";
import { FirebaseContext } from "../../context/firebase";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // need more study
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() =>
      // need more study
      Promise.resolve("I am signed in!")
    ),
  })),
};

describe("<SignIn />", () => {
  it("renders the sign in page with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      // need more study
      await fireEvent.change(getByPlaceholderText("Email address"), {
        target: { value: "salahebrahim@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: "password" },
      });
      fireEvent.click(getByTestId("sign-in"));

      expect(getByPlaceholderText("Email address").value).toBe(
        "salahebrahim@gmail.com"
      );
      expect(getByPlaceholderText("Password").value).toBe("password");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
