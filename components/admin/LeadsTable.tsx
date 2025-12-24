import { format } from "date-fns";

type Lead = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    projectDetails: string;
    createdAt: string;
};

const LeadsTable = ({ leads, title = "Recent Leads" }: { leads: Lead[], title?: string }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
            <div className="p-6 border-b border-black/5 flex justify-between items-center">
                <h2 className="text-xl font-serif font-bold text-midnight">{title}</h2>
                <div className="text-xs font-medium text-subtext uppercase tracking-widest">
                    {leads.length} {leads.length === 1 ? 'Entry' : 'Entries'}
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-porcelain/50 text-xs uppercase tracking-wider text-subtext font-medium">
                            <th className="p-4 pl-6">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Project Details</th>
                            <th className="p-4 pr-6">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                        {leads.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="p-8 text-center text-subtext">
                                    No leads found yet.
                                </td>
                            </tr>
                        ) : (
                            leads.map((lead) => (
                                <tr key={lead._id} className="hover:bg-porcelain/30 transition-colors group">
                                    <td className="p-4 pl-6 font-medium text-midnight group-hover:text-signature-purple transition-colors">
                                        {lead.firstName} {lead.lastName}
                                    </td>
                                    <td className="p-4 text-subtext">
                                        <a href={`mailto:${lead.email}`} className="text-midnight/70 hover:text-signature-start transition-colors">
                                            {lead.email}
                                        </a>
                                    </td>
                                    <td className="p-4 text-subtext max-w-xs truncate" title={lead.projectDetails}>
                                        {lead.projectDetails}
                                    </td>
                                    <td className="p-4 pr-6 text-subtext whitespace-nowrap text-xs">
                                        {format(new Date(lead.createdAt), "MMM d, yyyy • h:mm a")}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeadsTable;
