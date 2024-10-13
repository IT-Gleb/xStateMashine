//import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

export const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCWAdgIYDGyeAbmAMQAqA8gOKMAyAogNoAMAuoqAAdUsPOVQF+IAB6IAjAFYAzDgCcAJgDsXDQDYNADnnr9JgDQgAnon2ycitWpWzFAFhWHZLxbIC+f8wSoEHCSaBjYkkIiYhJI0ogAtDrmVghJ-iBhWLiEpORUkcKieOKSMgguainWti76XkayagoaTToZWdg4eZRghdElsaDlmvI4LjqK8mr17kaKGtUINuP1C2ouGopcsgp+fkA */
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
  on: {
    ABS: ".active",
  },
});
