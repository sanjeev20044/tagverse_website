'use client';

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            toast.promise(
                fetch('/api/admin/logout', { method: 'POST' }),
                {
                    loading: 'Logging out...',
                    success: () => {
                        window.location.href = "/admin/login";
                        return "Logged out successfully";
                    },
                    error: "Failed to logout"
                }
            );
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-lg text-sm font-medium text-gray-600 hover:text-red-600 hover:border-red-100 transition-all shadow-sm"
        >
            <LogOut size={16} />
            Logout
        </button>
    );
}
