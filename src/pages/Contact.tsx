import { useRef, FormEvent, } from 'react';
import emailjs from '@emailjs/browser';
import { useMediaQuery } from 'react-responsive';

import { AiFillPhone, AiTwotoneMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { GiPin } from 'react-icons/gi'

export const Contact = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const IsSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })

    const iconSize: number = IsSmallScreen ? 20 : 30;

    const form = useRef<HTMLFormElement>(null);

    const githubLink = "https://github.com/narterz?tab=repositories";
    const linkedInLink = "https://www.linkedin.com/in/jayden-shelton-136883182/";

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm(
                'service_900qx41',
                'template_0vd3k8k',
                form.current,
                'CNUld57kzC8HsLvvE'
            ).then((result) => {
                console.log(result.text);
                alert("Your message has been sent!");

                // Reset the form fields
                if (firstNameRef.current) firstNameRef.current.value = '';
                if (lastNameRef.current) lastNameRef.current.value = '';
                if (emailRef.current) emailRef.current.value = '';
                if (phoneRef.current) phoneRef.current.value = '';
                if (messageRef.current) messageRef.current.value = ''
            }, (error) => {
                console.log(error.text);
            });
        }
    };

    const contactInputs = [
        { name: "user__fname", ref: firstNameRef,  type: "text", placeholder: "First name*" },
        { name: "user__lname", ref: lastNameRef, type: "text", placeholder: "Last name" },
        { name: "user__email", ref: emailRef, type: "email", placeholder: "Email*" },
        { name: "user__phone", ref: phoneRef, type: "text", placeholder: "Phone (optional)"},
        { name: "user__message", ref: messageRef,  type: "textarea", placeholder: "Enter message" }
    ];

    return (
        <div className="h-[70vh] relative flex xsm:flex-col xsm:items-center xsm:text-primary md:flex-row" id="contact">
            <div className="contact-shape-divider xsm:max-lg:hidden lg:block">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="contact-shape-fill"></path>
                </svg>
            </div>
            <div className="relative flex justify-end xsm:h-[40%] md:h-full sxsm:w-[95%] lg:w-1/2 xsm:bg-white md:bg-primary">
                <div className='lg:h-full  xl:h-[80%] xsm:w-full md:w-[90%] lg:absolute bottom-0 flex flex-col justify-between items-center'>
                    <div className='flex flex-col w-full md:items-start md:h-3/6 xsm:items-center md:justify-evenly'>
                        <h1 className="font-bold xsm:text-primary md:text-white xsm:text-md md:text-lg lg:text-xlg"><b className='md:text-secondary xsm:text-primary'>Contact </b>me!</h1>
                        <small className='font-normal leading-8 md:text-norm md:text-white xsm:text-center md:text-start lg:text-sm xl:w-4/5 xxl:w-3/5 xsm:text-xxsm lg:w-full xsm:w-full xsm:text-black'>Feel free to contact via email, phone, or through the message prompt. I look forward to hearing from you.</small>
                    </div>
                    <div className='flex flex-col items-start w-full md:me-12 xl:me-20 xsm:mt-5 xxl:mt-0 md:h-2/6 justify-evenly h-3/5'>
                        <div className='contact-info'>
                            <AiFillPhone size={iconSize} className='contact-icons md:text-secondary xsm:text-primary' />
                            <small className='ms-5'>(203) 722 3830</small>
                        </div>
                        <div className='contact-info'>
                            <AiTwotoneMail size={iconSize} className='contact-icons md:text-secondary xsm:text-primary' />
                            <small className='ms-5'>jaydencshelton@yahoo.com</small>
                        </div>
                        <div className='contact-info'>
                            <GiPin size={iconSize} className='contact-icons lg:items-end md:text-secondary xsm:text-primary' />
                            <small className='ms-5'>Norwalk, Connecticut</small>
                        </div>
                    </div>
                    <div className='items-end w-full mb-3 md:flex md:h-1/6 xsm:hidden'>
                        <div className='flex flex-row items-end justify-between w-1/3 h-full lg:items-center'>
                            <a href={githubLink}>
                                <AiOutlineGithub size={40} className="transition-colors ease-in delay-100 cursor-pointer md:text-secondary xsm:text-primary hover:text-white" />
                            </a>
                            <a href={linkedInLink}>
                                <AiOutlineLinkedin size={40} className="transition-colors ease-in delay-100 cursor-pointer md:text-secondary xsm:text-primary hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-0 md:mb-12 lg:mb-0 right-0 rounded-lg lg:absolute xsm:h-[60%] md:h-2/4 lg:h-4/5 xsm:w-[95%]  lg:w-1/2 border-l-transparent '>
                <form action="" ref={form} onSubmit={sendEmail}>
                    {contactInputs.map((input, i) => (
                        <div className='contact-inputs-container' key={input.name} id={"input" + i}>
                            {input.type === "textarea" ? (
                                <textarea
                                    name={input.name}
                                    placeholder={input.placeholder}
                                    className='border-b outline-none border-primary xsm:w-full xsm:ms-0 xsm:me-0 md:ms-3 md:me-3 lg:ms-3 lg:me-3'
                                    ref={input.ref as React.RefObject<HTMLTextAreaElement>}
                                />

                            ): (
                                <input 
                                    name={input.name}
                                    className={`contact-inputs xsm:ms-0 xsm:me-0 md:ms-3 md:me-3 ${i % 2 === 0 && "lg:ms-3"}`}
                                    placeholder={input.placeholder}
                                    type={input.type}
                                    ref={input.ref as React.RefObject<HTMLInputElement>}
                                />
                            )}
                        </div>
                    ))}
                    <div className='flex xsm:justify-between md:justify-end xsm:items-center md:items-end md:w-full  xsm:w-full md:h-[30%] ' id='button'>
                        <button type='submit' className='md:h-1/2 md:me-3 lg:me-5 xl:me-10 lg:h-full xsm:w-2/5 md:w-2/5 lg:w-1/5 xsm:h-full bg-secondary text-primary'>Submit</button>
                        <div className='flex-row items-center w-3/5 h-full justify-evenly xsm:flex md:hidden'>
                            <a href={githubLink}>
                                <AiOutlineGithub size={30} className="transition-colors ease-in delay-100 cursor-pointer lg:text-secondary xsm:text-primary hover:text-white" />
                            </a>
                            <a href={linkedInLink}>
                                <AiOutlineLinkedin size={30} className="w-full transition-colors ease-in delay-100 cursor-pointer lg:text-secondary xsm:text-primary hover:text-white" />
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}