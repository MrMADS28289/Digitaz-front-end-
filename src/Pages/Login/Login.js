import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center flex-col items-center my-10'>
            <h3 className='text-2xl text-center font-bold mb-8'><span className=' border-b-2 border-primary'>Please Login</span></h3>
            <div class="flex flex-col w-full md:w-2/4 justify-center items-center" >
                <div class="hero w-full">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <form
                            onSubmit={onSubmit}
                            class="card w-full shadow-2xl bg-base-100">
                            <div class="card-body w-full">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input
                                        {...register("email",
                                            {
                                                required: true,
                                                pattern: /.+@globex\.com/i
                                            })}
                                        type="text" placeholder="Your Email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input
                                        {...register("password",
                                            {
                                                required: true,
                                                min: 6,
                                            })}
                                        type="text" placeholder="password" class="input input-bordered" />
                                    <label class="label">
                                        <button class="label-text-alt text-red-500 link link-hover mt-7">Forgot password?</button>
                                    </label>
                                    <Link to='/regester' class="text-sky-500 label-text-alt link link-hover">New to Digitaz? Create a account</Link>
                                </div>
                                <div class="form-control mt-6">
                                    <input type='submit' value='Login' class="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="divider">OR</div>
                <button className='flex text-2xl font-bold bg-gray-100 rounded-box place-items-center px-10 py-2 shadow-2xl'><FcGoogle className='text-5xl' /> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;