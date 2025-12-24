export default function FooterPage() {
    return (
        <div className="space-y-8 pb-12">
            <div>
                <h1 className="text-3xl font-serif font-medium text-midnight">Footer Content Management</h1>
                <p className="text-subtext mt-1">Manage your website footer content, social links, and quick navigation links.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-8 space-y-8">
                <h3 className="text-lg font-serif font-medium text-midnight">Basic Information</h3>
                <p className="text-subtext text-sm">Update footer description and copyright text</p>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-midnight">Footer Description</label>
                        <div className="border border-black/10 rounded-lg overflow-hidden h-32">
                            <div className="bg-porcelain border-b border-black/5 p-2 flex gap-2">
                                {/* Mock Toolbar */}
                                <span className="p-1 px-2 hover:bg-black/5 rounded cursor-pointer font-serif">B</span>
                                <span className="p-1 px-2 hover:bg-black/5 rounded cursor-pointer italic">I</span>
                                <span className="p-1 px-2 hover:bg-black/5 rounded cursor-pointer underline">U</span>
                            </div>
                            <textarea
                                className="w-full h-full p-4 outline-none resize-none"
                                defaultValue="TagVerse: An enterprise solutions provider of rare intelligence and vision. Wielding the power of AI with masterful restraint."
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-midnight">Copyright Text</label>
                        <input
                            type="text"
                            defaultValue="© 2025 tagverse.io. All rights reserved."
                            className="w-full px-4 py-2 rounded-lg border border-black/10 focus:ring-2 focus:ring-signature-start/20 focus:border-signature-start outline-none transition-all"
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
