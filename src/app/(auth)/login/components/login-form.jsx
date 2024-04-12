"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { toast } = useToast()


    const onSubmit = async (data) => {
        const result = await fetch(
            `/api/login`,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => res.json());
        console.log(result);
        toast({
            description: "Đăng nhập thành công!",
        })
        localStorage.setItem('authorization', result.data.metadata.tokens.accessToken)
        localStorage.setItem('x-client-id', result.data.metadata.shop._id)
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
