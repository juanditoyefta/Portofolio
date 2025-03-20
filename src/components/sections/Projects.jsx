import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {
    return <section 
                id="projects" 
                className="min-h-screen flex items-center justify-center py-20"
            >
                <RevealOnScroll>
                <div className=" max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className=" p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className=" text-xl font-bold mb-2">IOT Project Smart Green House</h3>
                            <p className=" text-gray-400 mb-4">
                                mbuat alat berbasis IOT menggunakan ESP8266, 
                                Sensor kelembapan tanah, dan sensor cahaya 
                                untuk mengetahui kondisi tanaman secara online
                            </p>
                            <div className=" flex flex-wrap gap-2 mb-4">
                                {["ESP8266", "Soil Moisture Sensor", "LDR", "Relay", "Blynk", "C++", "Soldering"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className=" flex justify-between items-center">
                                <a 
                                    href="https://drive.google.com/drive/folders/105jCo1sx1EZ_exEWmIIK39oz2tM4Np80?usp=sharing" 
                                    className=" text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className=" p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className=" text-xl font-bold mb-2">Smart Door Lock</h3>
                            <p className=" text-gray-400 mb-4">sistem Smart Door Lock berbasis ESP8266 yang menggunakan RFID, 
                                RTC, WiFiManager, dan Telegram Notifikasi. Sistem dirancang 
                                untuk memberikan kontrol akses yang aman dan fleksibel.
                            </p>
                            <div className=" flex flex-wrap gap-2 mb-4">
                                {["ESP8266", "RFID", "RTC", "Telegram Bot", "PCB Desain", "C++", "Soldering"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className=" flex justify-between items-center">
                                <a 
                                    href="https://drive.google.com/drive/folders/1taIYd915GNN-tmXRMTnZaCl5of-ehWGq?usp=sharing" 
                                    className=" text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className=" p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className=" text-xl font-bold mb-2">Smart Farming</h3>
                            <p className=" text-gray-400 mb-4">
                                Proyek IoT ini memantau suhu, pencahayaan, dan kelembaban tanah menggunakan ESP32. 
                                Data ditampilkan di LCD OLED dan web (Node-RED). Alat juga mengirim notifikasi 
                                WhatsApp saat terdeteksi kebocoran air.
                            </p>
                            <div className=" flex flex-wrap gap-2 mb-4">
                                {["ESP32", "Soil Mosture Sensor", "LDR", "Water Level Sensor", "SHT20","LCD Oled", "MQTT", "Node-Red", "C++" ,"Soldering"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className=" flex justify-between items-center">
                                <a 
                                    href="https://drive.google.com/drive/folders/1dec31RfB7ljwBwKmKz4dmjnxZCCHLVBu?usp=sharing" 
                                    className=" text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </RevealOnScroll>
            </section>
}