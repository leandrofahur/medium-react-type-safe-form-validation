import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./App.css";
import { MouseEventHandler } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

function App() {
  const { watch, register, handleSubmit, reset } = useForm<FormData>();

  const [disableCancelBtn, setDisableCancelBtn] = useState<boolean>(true);
  console.log(disableCancelBtn);

  const [name, email, password] = watch(["name", "email", "password"]);

  useEffect(() => {
    if (name || email || password) {
      setDisableCancelBtn(false);
    } else {
      setDisableCancelBtn(true);
    }
  }, [name, email, password]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleCancel: MouseEventHandler<HTMLButtonElement> = () => {
    reset();
    setDisableCancelBtn(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="labelForm">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="name" {...register("name")} />
      </div>
      <div className="labelForm">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          {...register("email")}
        />
      </div>
      <div className="labelForm">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          {...register("password")}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={handleCancel}
          disabled={disableCancelBtn}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default App;
