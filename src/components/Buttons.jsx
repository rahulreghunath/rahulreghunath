import React, { Component } from 'react';
import { GitHub, LinkedIn, Resume, Email,Stack } from './../icons'

const DATA = [
    {
        href: "https://github.com/rahulreghunath/",
        aria: "Visit my GitHub profile",
        icon: <GitHub />,
        label: "Github",
    },
    {
        href: "https://linkedin.com/in/rahul-r-nath",
        aria: "Visit my LinkedIn profile",
        icon: <LinkedIn />,
        label: "LinkedIn",
    },
    {
        href: "https://stackoverflow.com/users/8609720/rahul-reghunath",
        aria: "Visit stackoverflow profile",
        icon: <Stack />,
        label: "stackoverflow",
    },
    {
        href: "https://rahul-r-public.s3.ap-south-1.amazonaws.com/resume_rahul_r.pdf",
        aria: "Download Resume",
        icon: <Resume />,
        label: "Resume",
    },
    {
        href: "mailto:me@rahulr.me",
        aria: "Send me an email with this template",
        icon: <Email />,
        label: "Email",
    }
];

const Button = ({ href, aria, icon, label }) => {
    return (
        <span className='button-container'>
            <a className='button' href={href} target='_self' aria-label={aria} rel='noopener noreferrer'>
                <div className='icon'>{icon}</div>
                <span className='icon_title'>{label}</span>
            </a>
        </span>
    );
};

class Buttons extends Component {
    render() {
        return (
            <div>
                {DATA.map((props, i) => (
                    <Button {...props} key={i} />
                ))}
            </div>
        );
    }
}

export default Buttons;
