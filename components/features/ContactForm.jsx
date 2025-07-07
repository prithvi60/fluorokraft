"use client";
import { useState } from "react";
import Loader from "../UI/Loader";
import { GetStartButton } from "../UI/Button";

const initialFormData = {
    name: "",
    email: "",
    jobTitle: "",
    companyName: "",
    contactNumber: "",
};
export const ContactForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(true);
        // console.log("Form Data Submitted:", formData);

        try {
            const emailResponse = await fetch("/api/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    jobTitle: formData.jobTitle,
                    companyName: formData.companyName,
                    contactNumber: formData.contactNumber,
                }),
            });

            if (!emailResponse.ok) {
                const errorData = await emailResponse.text();
                throw new Error(
                    `Email API Error: ${emailResponse.status} ${errorData}`
                );
            }

            const emailDataResult = await emailResponse.json();

            // Check for success
            if (emailDataResult.success) {
                setStatus(false);
                setFormData(initialFormData);
                e.target.reset();
            }
        } catch (error) {
            console.error("Error sending emails:", error);
            setStatus(false);
        }
        setStatus(false)
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="w-full space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-12 gap-x-12 lg:gap-x-20">
                    <div className="gap-1 flex flex-col relative text-sm md:text-base">
                        <label
                            htmlFor="name"
                            className="capitalize font-medium tracking-wider font-mono"
                        >
                            name
                        </label>
                        <div className="p-4 before:border-b-2 before:border-dashed before:border-primary placeholder:text-foreground relative before:absolute before:bottom-0 before:content-[''] before:left-0 before:w-full focus-within:before:h-1.5 focus-within:before:border-none focus-within:before:bg-primary focus-within:outline-none mb-1">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name || ""}
                                onChange={handleChange}
                                placeholder="Type"
                                className="w-full bg-transparent focus:outline-none placeholder:text-primary/75 placeholder:font-medium"
                            />
                        </div>
                    </div>
                    <div className="gap-1 flex flex-col relative text-sm md:text-base">
                        <label
                            htmlFor="jobTitle"
                            className="capitalize font-medium tracking-wider font-mono"
                        >
                            job title
                        </label>
                        <div className="p-4 before:border-b-2 before:border-dashed before:border-primary placeholder:text-foreground relative before:absolute before:bottom-0 before:content-[''] before:left-0 before:w-full focus-within:before:h-1.5 focus-within:before:border-none focus-within:before:bg-primary focus-within:outline-none mb-1">
                            <input
                                type="text"
                                id="jobTitle"
                                name="jobTitle"
                                required
                                value={formData.jobTitle || ""}
                                onChange={handleChange}
                                placeholder="Type"
                                className="w-full bg-transparent focus:outline-none placeholder:text-primary/75 placeholder:font-medium"
                            />
                        </div>
                    </div>
                    <div className="gap-1 flex flex-col relative text-sm md:text-base">
                        <label
                            htmlFor="email"
                            className="capitalize font-medium tracking-wider font-mono"
                        >
                            email
                        </label>
                        <div className="p-4 before:border-b-2 before:border-dashed before:border-primary placeholder:text-foreground relative before:absolute before:bottom-0 before:content-[''] before:left-0 before:w-full focus-within:before:h-1.5 focus-within:before:border-none focus-within:before:bg-primary focus-within:outline-none mb-1">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email || ""}
                                onChange={handleChange}
                                placeholder="Type"
                                className="w-full bg-transparent focus:outline-none placeholder:text-primary/75 placeholder:font-medium"
                            />
                        </div>
                    </div>
                    <div className="gap-1 flex flex-col relative text-sm md:text-base">
                        <label
                            htmlFor="companyName"
                            className="capitalize font-medium tracking-wider font-mono"
                        >
                            company name
                        </label>
                        <div className="p-4 before:border-b-2 before:border-dashed before:border-primary placeholder:text-foreground relative before:absolute before:bottom-0 before:content-[''] before:left-0 before:w-full focus-within:before:h-1.5 focus-within:before:border-none focus-within:before:bg-primary focus-within:outline-none mb-1">
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                required
                                value={formData.companyName || ""}
                                onChange={handleChange}
                                placeholder="Type"
                                className="w-full bg-transparent focus:outline-none placeholder:text-primary/75 placeholder:font-medium"
                            />
                        </div>
                    </div>
                    <div className="gap-1 flex flex-col relative text-sm md:text-base">
                        <label
                            htmlFor="contactNumber"
                            className="capitalize font-medium tracking-wider font-mono"
                        >
                            contact number
                        </label>
                        <div className="p-4 before:border-b-2 before:border-dashed before:border-primary placeholder:text-foreground relative before:absolute before:bottom-0 before:content-[''] before:left-0 before:w-full focus-within:before:h-1.5 focus-within:before:border-none focus-within:before:bg-primary focus-within:outline-none mb-1">
                            <input
                                type="text"
                                id="contactNumber"
                                name="contactNumber"
                                required
                                maxLength={10}
                                minLength={10}
                                value={formData.contactNumber || ""}
                                onChange={handleChange}
                                placeholder="Type"
                                className="w-full bg-transparent focus:outline-none placeholder:text-primary/75 placeholder:font-medium"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <GetStartButton text={"submit"} status={status} type />
                </div>
            </form>
        </>
    );
};
