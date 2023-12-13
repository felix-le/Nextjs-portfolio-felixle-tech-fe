"use client";
import {useState} from "react";

export type ToggleState = {
  state: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const useToggleState = (initialState = false): ToggleState => {
  const [state, setState] = useState<boolean>(initialState);

  const close = () => {
    setState(false);
  };

  const open = () => {
    setState(true);
  };

  const toggle = () => {
    setState((currentState) => !currentState);
  };

  return {
    state,
    open,
    close,
    toggle,
  };
};
