"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const result = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/shop/login`,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key":
                        "672acce5c1d4545500c082cc7bc8d346f7eabda878bb82337eccd21b5bf68a801a99ff16cae34872cca021aa704ba38e1aedf7371ccad84b3fe7b5f57a1911aa",
                },
            }
        ).then((res) => res.json());
        console.log(result);
        localStorage.setItem('authorization', result.metadata.tokens.accessToken)
        localStorage.setItem('x-client-id', result.metadata.shop._id)
    };
    const handleClick = async () => {
        const data = await fetch('/api/me', {
            headers: {
                'authorization': localStorage.getItem('authorization'),
                'x-client-id': localStorage.getItem('x-client-id'),
                "Content-Type": "application/json",
            }
        })
        console.log(await data.json());
    }
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col max-w-[500px]"
            >
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register("email")} className="border" placeholder="email" />

                {/* include validation with required or other standard HTML validation rules */}
                <input
                    {...register("password")}
                    type="password"
                    className="border mt-5"
                    placeholder="password"
                />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}

                <Button type="submit">submit</Button>
            </form>
            <Button onClick={handleClick}>test</Button>
        </>
    );
};

export default LoginForm;
