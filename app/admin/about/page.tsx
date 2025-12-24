import { Upload } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="space-y-8 pb-12">
            <div>
                <h1 className="text-3xl font-serif font-medium text-midnight">About Page Content</h1>
                <p className="text-subtext mt-1">Manage the content for the About Us page.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-8 space-y-8">
                {/* Page Title */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-midnight">Page Title</label>
                    <div className="border border-black/10 rounded-lg overflow-hidden">
                        <div className="bg-porcelain border-b border-black/5 p-2 flex gap-2">
                            {/* Mock Toolbar */}
                            <span className="p-1 px-2 hover:bg-black/5 rounded cursor-pointer font-serif">B</span>
                            <span className="p-1 px-2 hover:bg-black/5 rounded cursor-pointer italic">I</span>
                            <span className="p-1 px-2 hover:bg-black/5 rounded cursor-pointer underline">U</span>
                        </div>
                        <input
                            type="text"
                            defaultValue="The Essence of TagVerse"
                            className="w-full px-4 py-3 outline-none"
                        />
                    </div>
                </div>

                {/* Hero Image Upload */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-midnight">Hero Image</label>
                    <div className="border-2 border-dashed border-black/10 rounded-xl p-8 flex flex-col items-center justify-center bg-porcelain/30 hover:bg-porcelain/60 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-signature-start/10 text-signature-start flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <Upload size={20} />
                        </div>
                        <div className="text-center">
                            <span className="text-signature-purple font-medium">Click to upload</span>
                            <span className="text-subtext"> or drag and drop</span>
                        </div>
                        <p className="text-xs text-subtext mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-midnight">Content</label>
                    <div className="border border-black/10 rounded-lg overflow-hidden h-64">
                        <div className="bg-porcelain border-b border-black/5 p-2 flex gap-2">
                            {/* Mock Toolbar */}
                            <span className="p-1 px-2 hover:bg-black/5 rounded cursor-pointer font-serif">B</span>
                            <span className="p-1 px-2 hover:bg-black/5 rounded cursor-pointer italic">I</span>
                            <span className="p-1 px-2 hover:bg-black/5 rounded cursor-pointer underline">U</span>
                        </div>
                        <textarea
                            className="w-full h-full p-4 outline-none resize-none"
                            defaultValue="We are not just builders; we are architects of clarity. TagVerse exists to bring poise to the chaos of digital transformation."
                        />
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button className="px-6 py-2 bg-midnight text-white rounded-lg hover:bg-black transition-colors shadow-lg shadow-midnight/20">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
