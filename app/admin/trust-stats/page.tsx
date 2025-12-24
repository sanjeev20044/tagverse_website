export default function TrustStatsPage() {
    return (
        <div className="space-y-8 pb-12">
            <div>
                <h1 className="text-3xl font-serif font-medium text-midnight">Impact Statistics</h1>
                <p className="text-subtext mt-1">Manage the impact numbers displayed on the About page.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Stat 1 */}
                    <div className="space-y-4 border p-4 rounded-xl border-black/5 bg-porcelain/30">
                        <h4 className="font-medium text-midnight">Stat 1</h4>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-midnight">Label</label>
                            <input
                                type="text"
                                defaultValue="Client Retention"
                                className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-midnight">Value</label>
                                <input
                                    type="number"
                                    defaultValue="100"
                                    className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-midnight">Suffix</label>
                                <input
                                    type="text"
                                    defaultValue="%"
                                    className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="space-y-4 border p-4 rounded-xl border-black/5 bg-porcelain/30">
                        <h4 className="font-medium text-midnight">Stat 2</h4>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-midnight">Label</label>
                            <input
                                type="text"
                                defaultValue="Enterprise AI Agents"
                                className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-midnight">Value</label>
                                <input
                                    type="number"
                                    defaultValue="50"
                                    className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-midnight">Suffix</label>
                                <input
                                    type="text"
                                    defaultValue="+"
                                    className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="space-y-4 border p-4 rounded-xl border-black/5 bg-porcelain/30">
                        <h4 className="font-medium text-midnight">Stat 3</h4>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-midnight">Label</label>
                            <input
                                type="text"
                                defaultValue="Tasks Automated"
                                className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-midnight">Value</label>
                                <input
                                    type="number"
                                    defaultValue="37"
                                    className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-midnight">Suffix</label>
                                <input
                                    type="text"
                                    defaultValue="K+"
                                    className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="space-y-4 border p-4 rounded-xl border-black/5 bg-porcelain/30">
                        <h4 className="font-medium text-midnight">Stat 4</h4>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-midnight">Label</label>
                            <input
                                type="text"
                                defaultValue="System Uptime"
                                className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-midnight">Value</label>
                                <input
                                    type="number"
                                    defaultValue="24"
                                    className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-midnight">Suffix</label>
                                <input
                                    type="text"
                                    defaultValue="/7"
                                    className="w-full px-4 py-2 rounded-lg border border-black/10 outline-none"
                                />
                            </div>
                        </div>
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
