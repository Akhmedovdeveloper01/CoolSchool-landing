import { Send } from "lucide-react";

export function Header() {
    return (
        <header className="relative bg-gradient-to-br from-white to-[#4ECDC4]/10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-[90px]">
                <img src="../../../../public/logo.png" width={160} alt="razgavorniy rus tili logo" />
                <a
                    href="#contact"
                    className="flex items-center justify-between w-[210px] bg-[#FF6B6B] hover:bg-[#ff5252] text-white p-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                    <Send className="w-5 h-5" />
                    Отправить заявку
                </a>
            </div>
        </header>
    )
}
