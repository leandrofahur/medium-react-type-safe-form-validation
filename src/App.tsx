import { useState, useEffect, MouseEventHandler } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./App.css";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof formSchema>;

function App() {
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

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
        <input
          type="text"
          id="name"
          placeholder="name"
          {...register("name")}
          aria-label="Name"
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>
      <div className="labelForm">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          {...register("email")}
          aria-label="Email"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div className="labelForm">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          {...register("password")}
          aria-label="Password"
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
      </div>
      <div className="button-group">
        <button type="submit" aria-label="Submit form">
          Submit
        </button>
        <button
          type="button"
          onClick={handleCancel}
          disabled={disableCancelBtn}
          aria-label="Cancel and reset form"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default App;
