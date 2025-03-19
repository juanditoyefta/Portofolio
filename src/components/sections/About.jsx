export const About = () => {

    const hardwareSkill = [
        "ESP32 & ESP8266", 
        "Integrasi sensor & aktuator", 
        "Komunikasi I2C, UART, SPI, WiFi", 
        "Soldering", 
        "PCB Desain (KiCad)"
    ]

    const softwareSkill = [
        "Pemrograman C++ ", 
        "Pemrograman Python (MicroPython)", 
        "Node-RED Dashboard", 
        "MongoDB & Ubidots", 
        "Blynk"
    ]

    return (
        <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Siswa SMK Negeri 2 Yogyakarta, Jurusan Sistem Informasi Jaringan dan Aplikasi (SIJA), 
                    dengan fokus pada bidang Internet of Things (IoT).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Hardware & Embedded Systems</h3>
                        <div className="flex flex-wrap gap-2">
                            {hardwareSkill.map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Software & Cloud Integration</h3>
                        <div className="flex flex-wrap gap-2">
                            {softwareSkill.map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> SMP Negeri 1 Yogyakarta</strong> <br />
                            2019-2022
                        </li>
                        <li>
                            <strong> SMK Negeri 2 Yogyakarta</strong> <br />
                            2022-Sekarang
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Bootcam</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Edspert IoT Mini Bootcamp</strong> <br />
                            30 Agustus 2024
                        </li>
                        <li>
                            <strong> Edspert IoT Complete level </strong> <br />
                            8 Oktober 2024 - 17 Desember 2024
                        </li>
                        <li>
                            <strong> Samsung Inovation Campus  </strong> <br />
                            9 Januari 2024 - sekarang 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            
        </section>
    )
}