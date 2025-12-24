import { GripVertical, Trash2, Plus } from "lucide-react";

export default function NavbarPage() {
    return (
        <div className="space-y-8 pb-12">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-serif font-medium text-midnight">Navbar Header</h1>
                    <p className="text-subtext mt-1">Manage navigation menu links.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-signature-purple text-white rounded-lg hover:bg-signature-end transition-colors text-sm font-medium">
                    <Plus size={18} />
                    Add Link
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
                <div className="p-6 border-b border-black/5 bg-porcelain/50">
                    <div className="grid grid-cols-12 gap-4 text-xs font-semibold uppercase tracking-wider text-subtext">
                        <div className="col-span-1">Sort</div>
                        <div className="col-span-4">Link Name</div>
                        <div className="col-span-5">Path</div>
                        <div className="col-span-2 text-right">Actions</div>
                    </div>
                </div>
                <div className="divide-y divide-black/5">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'About', path: '/about' },
                        { name: 'Services', path: '/services' },
                        { name: 'Portfolio', path: '/portfolio' },
                        { name: 'Contact Us', path: '/contact' }
                    ].map((link, i) => (
                        <div key={i} className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-porcelain/30 transition-colors group">
                            <div className="col-span-1 text-subtext cursor-grab active:cursor-grabbing">
                                <GripVertical size={20} />
                            </div>
                            <div className="col-span-4">
                                <input
                                    type="text"
                                    defaultValue={link.name}
                                    className="w-full bg-transparent border-none p-0 focus:ring-0 font-medium text-midnight"
                                />
                            </div>
                            <div className="col-span-5">
                                <input
                                    type="text"
                                    defaultValue={link.path}
                                    className="w-full bg-porcelain/50 border border-black/5 rounded px-2 py-1 text-sm text-subtext focus:border-signature-start focus:bg-white outline-none transition-all"
                                />
                            </div>
                            <div className="col-span-2 flex justify-end">
                                <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end pt-4">
                <button className="px-6 py-2 bg-midnight text-white rounded-lg hover:bg-black transition-colors shadow-lg shadow-midnight/20">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
