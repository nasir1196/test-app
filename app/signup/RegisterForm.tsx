"use client"
import {useForm, SubmitHandler} from "react-hook-form"
import axios from "axios";

type Inputs = {
    name: string
    email: string
    password: string
}

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        await axios.post("/api/auth/register", data).then((callback) => {
            if (callback) {
                alert("user created")
            }
        }).catch((err: any) => {
            if (err) {
                alert("something wrong")
                console.log(err.message)
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className={"border-[1.5px] border-slate-800 py-5 m-3"} type={"text"}
                           placeholder={"Name"} {...register("name", {required: true})}/>
                </div>
                <div>
                    <input className={"border-[1.5px] border-slate-800 py-5 m-3"} type={"text"}
                           placeholder={"Email"} {...register("email", {required: true})}/>
                </div>
                <div>
                    <input className={"border-[1.5px] border-slate-800 py-5 m-3"} type={"password"}
                           placeholder={"Password"} {...register("password", {required: true})}/>
                </div>

                <button className={"border-[1px] border-slate-800 bg-teal-500 px-10 py-5 m-auto"}>signup</button>
            </form>
        </div>
    )
}

export default RegisterForm