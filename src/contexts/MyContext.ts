import { createContext } from "react";

type MyDropdownContextType = {
  contractpackages: any;
  updateContractPackage: any;
  superurgentswitch: any;
  updateSuperurgentSwitch: any;
};

const initialState = {
  contractpackages: undefined,
  updateContractPackage: undefined,
  superurgentswitch: undefined,
  updateSuperurgentSwitch: undefined,
};

export const MyContext = createContext<MyDropdownContextType>({
  ...initialState,
});
