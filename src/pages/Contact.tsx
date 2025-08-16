import { useRef, FormEvent } from "react";
import { ContactForm } from "../types";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../constants/contactText";
import { useMediaQuery } from "react-responsive";

import {
    AiFillPhone,
    AiTwotoneMail,
    AiOutlineLinkedin,
    AiOutlineGithub,
} from "react-icons/ai";
import { GiPin } from "react-icons/gi";

export const Contact = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const form = useRef<HTMLFormElement>(null);

    const IsSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

    const iconSize: number = IsSmallScreen ? 40 : 50;

    const githubLink = "https://github.com/narterz?tab=repositories";
    const linkedInLink =
        "https://www.linkedin.com/in/jayden-shelton-136883182/";

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        if (form.current) {
            emailjs
                .sendForm(
                    "service_900qx41",
                    "template_0vd3k8k",
                    form.current,
                    "CNUld57kzC8HsLvvE"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        alert("Your message has been sent!");

                        // Reset the form fields
                        if (firstNameRef.current)
                            firstNameRef.current.value = "";
                        if (lastNameRef.current) lastNameRef.current.value = "";
                        if (emailRef.current) emailRef.current.value = "";
                        if (phoneRef.current) phoneRef.current.value = "";
                        if (messageRef.current) messageRef.current.value = "";
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    const contactInputs: ContactForm[] = [
        {
            name: "user__fname",
            ref: firstNameRef,
            type: "text",
            placeholder: "First name*",
        },
        {
            name: "user__lname",
            ref: lastNameRef,
            type: "text",
            placeholder: "Last name",
        },
        {
            name: "user__email",
            ref: emailRef,
            type: "email",
            placeholder: "Email*",
        },
        {
            name: "user__phone",
            ref: phoneRef,
            type: "text",
            placeholder: "Phone (optional)",
        },
        // { name: "user__message", ref: messageRef,  type: "textarea", placeholder: "Enter message" }
    ];

    const socials = [
        {
            name: "LinkedIn",
            icon: (
                <AiOutlineLinkedin className="social-icons" size={iconSize} />
            ),
            link: "https://www.linkedin.com/in/jayden-shelton-136883182/",
        },
        {
            name: "Github",
            icon: <AiOutlineGithub className="social-icons" size={iconSize} />,
            link: "https://github.com/narterz?tab=repositories",
        },
    ];

    const contactInfo = [
        {
            name: "phoneNumber",
            text: "203-722-3830",
            icon: (
                <AiFillPhone
                    size={iconSize}
                    className="contact-icons md:text-secondary xsm:text-primary"
                />
            ),
        },
        {
            name: "email",
            text: "jaydencshelton@gmail.com",
            icon: (
                <AiTwotoneMail
                    size={iconSize}
                    className="contact-icons md:text-secondary xsm:text-primary"
                />
            ),
        },
        {
            name: "location",
            text: "Norwalk, Connecticut",
            icon: (
                <GiPin
                    size={iconSize}
                    className="contact-icons md:text-secondary xsm:text-primary"
                />
            ),
        },
    ];

    return (
        <div className="h-[70vh] lg:relative" id="contact">
            <div className="contact-shape-divider xsm:hidden lg:block">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="contact-shape-fill"
                    ></path>
                </svg>
            </div>

            <div className="contact-info-container flex center-contact">
                
                <div className="contact-info-header flex flex-col w-full">
                    <h1>
                        <b className="text-primary">Contact </b>me!
                    </h1>
                    <p className="xsm:text-center md:text-start">
                        Feel free to contact via email, phone, or through the
                        message prompt. I look forward to hearing from you.
                    </p>
                </div>

                <div className="contact-info-text flex w-full">
                    {contactInfo.map((contact) => (
                        <div className="contact-info flex" key={contact.name}>
                            {contact.icon}
                            <p>{contact.text}</p>
                        </div>
                    ))}
                </div>

                <div className="contact-socials-left">
                    {socials.map((social) => (
                        <a href={social.link} className="xsm:hidden lg:block">{social.icon}</a>
                    ))}
                </div>
            </div>
            <div className="contact-form-container w-full">
                <form
                    action=""
                    ref={form}
                    onSubmit={sendEmail}
                    className="h-full w-full"
                >
                    <div className="contact-inputs-container">
                        {contactInputs.map((input) => (
                            <input
                                name={input.name}
                                placeholder={input.placeholder}
                                ref={
                                    input.ref as React.RefObject<HTMLInputElement>
                                }
                                type={input.type}
                                className="w-full h-1/4 border-b border-primary"
                            />
                        ))}
                    </div>
                    <div className="contact-textarea-container">
                        <textarea
                            name="user__message"
                            placeholder="Enter your message"
                            ref={messageRef}
                            className="w-full h-full border-b pt-10 border-primary"
                        />
                    </div>
                    <div className='contact-btn-container flex flex-row items-center' id='button'>
                        <button type='submit' className='xsm:h-1/2  md:me-3 lg:me-5 xl:me-10 lg:h-1/2 xsm:w-2/5 md:w-2/5 bg-secondary text-primary'>Submit</button>
                        <div className='flex-row items-center xsm:w-2/5 w-3/5 xsm:justify-between h-full justify-evenly xsm:flex lg:hidden'>
                            { socials.map((social) => (
                                <a href={social.link}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    );
};
