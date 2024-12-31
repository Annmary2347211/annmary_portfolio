import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Access credentials from environment variables
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        // Send email using EmailJS
        emailjs
            .send(
                serviceId,
                templateId,
                {
                    to_name: "Annmary Baby", // Replace with your name or dynamic recipient
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                publicKey
            )
            .then((response) => {
                console.log("Email sent successfully!", response);
                setIsSubmitted(true);
                setError("");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setError("Failed to send message. Please try again later.");
            });
    };

    return (
        <div className="bg-gradient-to-r from-blue-100 to-purple-200 px-6 py-12 min-h-screen">
            <h2 className="text-4xl font-bold text-center text-black mb-8">Contact Me</h2>
            <div className="flex justify-center ">
                <form
                    onSubmit={handleSubmit}
                    className="bg-gradient-to-r from-blue-100 to-purple-200 shadow-lg rounded-lg p-8 w-full max-w-xl  border-2 border-white"
                >
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    {isSubmitted && (
                        <p className="text-green-600 text-center mb-4">
                            Thank you! Your message has been sent.
                        </p>
                    )}

                    {error && (
                        <p className="text-red-600 text-center mb-4">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-6 rounded-lg w-full shadow-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
