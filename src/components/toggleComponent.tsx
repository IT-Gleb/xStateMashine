import { useCallback } from "react";
import { toggleMachine } from "../mashine/mashineSmall";
import { useMachine } from "@xstate/react";

export function ToggleComponent() {
  const [state, send] = useMachine(toggleMachine);

  //console.log(state);
  //console.log(send);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.currentTarget.value);
  // };

  const handleActivate = useCallback(() => {
    send({ type: "TOGGLE" });
  }, [send]);

  return (
    <section className="w-fit mx-auto p-2">
      <div className="flex items-center justify-center gap-x-4">
        <button
          className="p-1 bg-slate-300 text-slate-700 active:scale-90"
          type="button"
          onClick={handleActivate}
        >
          {state.matches("inactive") ? "Активировать" : "Де-Активировать"}
        </button>
      </div>
      <div className="mt-10">
        <input
          type="checkbox"
          name="toggle1"
          id="toggle1"
          checked={state.value === "active" ? true : false}
          // onChange={handleChange}
        />
      </div>
    </section>
  );
}
