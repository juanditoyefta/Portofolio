import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RevealOnScroll } from "./RevealOnScroll";

export const Contact = () => {
    const form = useRef(null);

    const sendEmail = (event) => {
        event.preventDefault();

        if (!form.current) return;

        emailjs.sendForm(
            "service_9yjhrvh",   // Ganti dengan Service ID
            "template_8ufg5op",  // Ganti dengan Template ID
            form.current,
            "ZqXU6-oa8onGJgIoU"    // Ganti dengan Public Key
        )
        .then(
            () => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.error("Failed to send message:", error);
                alert("Failed to send message. Try again later.");
            }
        );
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="relative">
                            <input 
                                type="text" id="name" name="name" required 
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                            />
                        </div>
                        <div className="relative">
                            <input 
                                type="email" id="email" name="email" required 
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="relative">
                            <textarea 
                                id="message" name="message" required rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
