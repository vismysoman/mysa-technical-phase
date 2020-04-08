import {
  readToasterSettings,
  getDefaultSettings,
  errorCallBack,
} from "../src/toasterSettings";
import { expect } from "chai";

describe("readToasterSettings()", () => {
  it("shoule send error along with default settings", () => {
    const deaultSettings = getDefaultSettings();
    const toasterSettins = readToasterSettings(0, errorCallBack); // Passing no id end up in error

    return expect(toasterSettins).to.equal("Failed + Default settings"); // On Real world may be we can choose rejectWith to Check Error
  });
  it("shoule fetch default settings", () => {
    const deaultSettings = getDefaultSettings();
    const toasterSettins = readToasterSettings(-1, errorCallBack); // Pass invalid id

    return expect(toasterSettins).to.equal(deaultSettings);
  });
});
