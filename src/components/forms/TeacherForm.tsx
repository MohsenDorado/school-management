"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React from 'react'
import InputField from "../InputField";
import { useFormState } from "react-dom";
import { teacherSchema, TeacherSchema } from "@/lib/formValidations";

const schema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
  subjects: z.array(z.string()).optional(), // subject ids
});
type Inputs=z.infer<typeof schema>;

const TeacherForm = ({
    type,
    data,
    
  }: {
    type: "create" | "update";
    data?: any;
  }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TeacherSchema>({
        resolver: zodResolver(teacherSchema),
      });


    //   const [state, formAction] = useFormState(
    //     type === "create" ? createTeacher : updateTeacher,
    //     {
    //       success: false,
    //       error: false,
    //     }
    //   );
    const onSubmit=handleSubmit((data)=>{
        console.log(data);
        
    })
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
    <h1 className="text-xl font-semibold">
      {type === "create" ? "Create a new teacher" : "Update the teacher"}
    </h1>
    <span className="text-xs text-gray-400 font-medium">
      Authentication Information
    </span>
    <div className="flex justify-between flex-wrap gap-4">
      <InputField
        label="Username"
        name="username"
        defaultValue={data?.username}
        register={register}
        error={errors?.username}
      />
      <InputField
        label="Email"
        name="email"
        defaultValue={data?.email}
        register={register}
        error={errors?.email}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        defaultValue={data?.password}
        register={register}
        error={errors?.password}
      />
    </div>
    <span className="text-xs text-gray-400 font-medium">
      Personal Information
    </span>
    <div className="flex justify-between flex-wrap gap-4">
      <InputField
        label="First Name"
        name="name"
        defaultValue={data?.name}
        register={register}
        error={errors.name}
      />
      <InputField
        label="Last Name"
        name="surname"
        defaultValue={data?.surname}
        register={register}
        error={errors.surname}
      />
      <InputField
        label="Phone"
        name="phone"
        defaultValue={data?.phone}
        register={register}
        error={errors.phone}
      />
      <InputField
        label="Address"
        name="address"
        defaultValue={data?.address}
        register={register}
        error={errors.address}
      />
      <InputField
        label="Blood Type"
        name="bloodType"
        defaultValue={data?.bloodType}
        register={register}
        error={errors.bloodType}
      />
      <InputField
        label="Birthday"
        name="birthday"
        defaultValue={data?.birthday}
        register={register}
        error={errors.birthday}
        type="date"
      />
      {data && (
        <InputField
          label="Id"
          name="id"
          defaultValue={data?.id}
          register={register}
          error={errors?.id}
          hidden
        />
      )}
      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-xs text-gray-500">Sex</label>
        <select
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          {...register("sex")}
          defaultValue={data?.sex}
        >
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
        {errors.sex?.message && (
          <p className="text-xs text-red-400">
            {errors.sex.message.toString()}
          </p>
        )}
      </div>
      {/* <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-xs text-gray-500">Subjects</label>
        <select
          multiple
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          {...register("subjects")}
          defaultValue={data?.subjects}
        >
          {subjects.map((subject: { id: number; name: string }) => (
            <option value={subject.id} key={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>
        {errors.subjects?.message && (
          <p className="text-xs text-red-400">
            {errors.subjects.message.toString()}
          </p>
        )}
      </div> */}
      {/* <CldUploadWidget
        uploadPreset="school"
        onSuccess={(result, { widget }) => {
          setImg(result.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div
              className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
              onClick={() => open()}
            >
              <Image src="/upload.png" alt="" width={28} height={28} />
              <span>Upload a photo</span>
            </div>
          );
        }}
      </CldUploadWidget> */}
    </div>
    {/* {state.error && (
      <span className="text-red-500">Something went wrong!</span>
    )} */}
    <button className="bg-blue-400 text-white p-2 rounded-md">
      {type === "create" ? "Create" : "Update"}
    </button>
  </form>  )
}

export default TeacherForm