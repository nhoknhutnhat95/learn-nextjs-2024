"use client";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/shop/signup`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "x-api-key":
            "88cc69b2a14d49ff3d5a0e2df9c5a30f4a8e797c49c808e021fb62315efaea1c4dc72786377bb7f1a1f5b0d0bf539ca32858d434df577466b632117d3723f0eb",
        },
      }
    ).then((res) => res.json());
    console.log(result);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[500px]"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("name")} className="border" placeholder="name" />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        type="text"
        {...register("email", { required: true })}
        className="border mt-5"
        placeholder="email"
      />
      <input
        type="password"
        {...register("password", { required: true })}
        className="border mt-5"
        placeholder="password"
      />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      <Button type="submit">submit</Button>
    </form>
  );
};

export default RegisterForm;
