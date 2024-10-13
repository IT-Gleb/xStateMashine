import { assign, createMachine, fromPromise } from "xstate";
import { randomVal } from "../utils/functions";

const category: string[] = [
  "jewelery",
  "electronics",
  "men's clothing",
  "women's clothing",
];

export const productMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOlwgBswBiAGQHkBBAEQH1nGAVRgbQAYAuolAAHAPaxcAF1xj8wkAA9EARgBsakgBYA7AE51AJgCsWwwGZja4+YA0IAJ6r1JHVb3mdOrWr561OoYAvkH2aFh4hKQUYugQBFDUEHJgZPgAbmIA1qnhOATEJDFxCQgEmZjoMnL8ArUK4pLV8khKiFoAHFokfHzG-m46akZ99k4I5nyaNuaWfIHzhtYhYRj5UUWx8fiJYABOe2J7JCIUVQBmR6gkeZGFxdtQZRlilc219a2N0rItoMoIXTdfpLHR8DrGLomYxjRAAWhUKhIalmpi8ekMeg6+g65hWIFuBVIsAArphMHBYNQAJLMWgAUU+ogkPzkCgBWJ0JA6KgxZhxnS6sIQvI6JBUXi0ej4nUMWlMPnxhI2+0OexpdMZggaLOa7MQnO5vLlhgFHSFjlUfHM2g8AQ8GMRWlmIVCIHwYggcAUyuIOqav31CDhamFcKxJD0Vi0gtmAWMfBUSrWd1I5Co-tZfzagMMwpUcsjemLdsMHQxIOTESJmxKO0zetaAPMKmMJExZjUhl5+mtHWFHhIxhU5hjWMRgXUOir60KpPJlIbgabiHNfG0KPUfmLprlwvMhnXxgTxkPEv6fFNahnqZIqqOS7ZK4Qa43Ld8Jd3WmFp-FfRMvi4moehaPMrpBEAA */
  initial: "idle",
  context: {
    data: [],
    error: undefined,
  },
  states: {
    idle: {
      on: {
        LOAD_DATA: {
          target: "loading",
        },
      },
    },
    loading: {
      invoke: {
        src: fromPromise(() =>
          fetch(
            `https://fakestoreapi.com/products/category/${
              category[randomVal(0, category.length - 1)]
            }`
          ).then((res) => res.json())
        ),
        onDone: {
          target: "success",
          actions: assign({ data: ({ event }) => event.output }),
        },
        onError: {
          target: "error",
          actions: assign({ error: ({ event }) => event.error as any }),
        },
      },
    },
    success: {
      on: {
        IDLE: {
          target: "idle",
        },
      },
    },
    error: {
      on: {
        IDLE: {
          target: "idle",
        },
      },
    },
  },
});
