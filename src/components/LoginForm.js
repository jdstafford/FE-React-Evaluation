import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        class="input"
        name="username"
        placeholder="Username"
        ref={register({ required: true })}
      />
      <input
        class="input"
        name="password"
        type="password"
        placeholder="Password"
        ref={register({ required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}

      <button class="button">LOGIN</button>
    </form>
  );
}
