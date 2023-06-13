import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:elugon10@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="my-screen relative mx-auto flex max-w-7xl flex-col items-center justify-evenly px-10 text-center">
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 pt-28">
        <h4 className="text-center text-xs font-semibold sm:text-lg md:text-xl">
          At this point, why not reach out to someone who loves coding?.{" "}
          <span className="underline decoration-[#F7AB0A]/50">{`Let's Talk`}</span>
        </h4>
      </div>

      <div className="mb-6 mt-4 h-10 space-y-2 md:mt-12">
        <div className="flex items-center space-x-5">
          <PhoneIcon className="h-5 w-5 animate-pulse text-[#F7AB0A] sm:h-12 sm:w-12" />
          <p className="text-xs sm:text-lg">+34 634 91 86 59</p>
        </div>

        <div className="flex items-center space-x-5">
          <EnvelopeIcon className="h-5 w-5 animate-pulse text-[#F7AB0A] sm:h-12 sm:w-12" />
          <p className="text-xs sm:text-lg">elugon10@gmail.com</p>
        </div>

        <div className="flex items-center space-x-5">
          <MapPinIcon className="h-5 w-5 animate-pulse text-[#F7AB0A] sm:h-12 sm:w-12" />
          <p className="text-xs sm:text-lg">Barcelona, Spain.</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col space-y-2 pt-4 text-xs sm:pt-10 sm:text-base md:pt-12 md:text-lg lg:pt-16"
      >
        <div className="mx-auto flex flex-col space-y-2">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        />
        <button
          type="submit"
          className="rounded-md bg-[#F7AB0A] py-2 px-5 text-xs font-bold text-black md:text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
