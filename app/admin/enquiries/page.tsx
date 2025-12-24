// app/admin/enquiries/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Trash2, Eye, Mail, Phone, RefreshCcw, MessageSquare } from 'lucide-react';

interface Enquiry {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject?: string;
  projectDetails: string;
  status: 'new' | 'read' | 'replied' | 'closed';
  createdAt: string;
}

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Fetch enquiries
  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/enquiries');
      if (!response.ok) throw new Error('Failed to fetch enquiries');
      const data = await response.json();
      setEnquiries(data.data || []);
    } catch (error: any) {
      console.error('Error fetching enquiries:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // Delete enquiry
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;

    try {
      const response = await fetch(`/api/enquiries?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setEnquiries(enquiries.filter(e => e._id !== id));
      }
    } catch (error) {
      console.error('Error deleting enquiry:', error);
    }
  };

  // Update status
  const handleStatusChange = async (id: string, status: string) => {
    try {
      const response = await fetch('/api/enquiries', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      });

      if (response.ok) {
        setEnquiries(enquiries.map(e =>
          e._id === id ? { ...e, status: status as Enquiry['status'] } : e
        ));
        // Update selectedEnquiry if it's currently being viewed
        if (selectedEnquiry && selectedEnquiry._id === id) {
          setSelectedEnquiry({ ...selectedEnquiry, status: status as Enquiry['status'] });
        }
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // View details
  const handleView = (enquiry: Enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsDialogOpen(true);

    // Mark as read if it's new
    if (enquiry.status === 'new') {
      handleStatusChange(enquiry._id, 'read');
    }
  };

  // Get badge color based on status
  const getStatusBadge = (status: string) => {
    const colors = {
      new: 'bg-blue-500',
      read: 'bg-yellow-500',
      replied: 'bg-green-500',
      closed: 'bg-gray-500',
    };
    return (
      <Badge className={colors[status as keyof typeof colors] || 'bg-gray-500'}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Enquiries</h1>
        <p className="text-gray-600">Manage all customer enquiries</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-2xl font-bold text-blue-600">{enquiries.length}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-sm text-gray-600">New</p>
          <p className="text-2xl font-bold text-yellow-600">
            {enquiries.filter(e => e.status === 'new').length}
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm text-gray-600">Replied</p>
          <p className="text-2xl font-bold text-green-600">
            {enquiries.filter(e => e.status === 'replied').length}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">Closed</p>
          <p className="text-2xl font-bold text-gray-600">
            {enquiries.filter(e => e.status === 'closed').length}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12">
                  <div className="flex flex-col items-center gap-2">
                    <RefreshCcw className="w-8 h-8 animate-spin text-signature-start" />
                    <span className="text-subtext font-medium">Loading enquiries...</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12 text-red-500">
                  <div className="flex flex-col items-center gap-3">
                    <span className="font-semibold text-lg">Failed to load enquiries</span>
                    <span className="text-sm opacity-80 max-w-md mx-auto">{error}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchEnquiries}
                      className="mt-2 border-red-200 hover:bg-red-50 text-red-600"
                    >
                      <RefreshCcw className="mr-2 h-4 w-4" />
                      Try Again
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ) : enquiries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-400 py-12">
                  <div className="flex flex-col items-center gap-2">
                    <MessageSquare size={32} className="opacity-20 mb-2" />
                    <p className="font-medium">No enquiries yet</p>
                    <p className="text-sm">When someone submits the contact form, they will appear here.</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              enquiries.map((enquiry) => (
                <TableRow key={enquiry._id}>
                  <TableCell className="font-medium">{enquiry.firstName} {enquiry.lastName}</TableCell>
                  <TableCell>{enquiry.email}</TableCell>
                  <TableCell>{enquiry.subject || 'N/A'}</TableCell>
                  <TableCell>{getStatusBadge(enquiry.status)}</TableCell>
                  <TableCell>{formatDate(enquiry.createdAt)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleView(enquiry)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(enquiry._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Enquiry Details</DialogTitle>
            <DialogDescription>
              Submitted on {selectedEnquiry && formatDate(selectedEnquiry.createdAt)}
            </DialogDescription>
          </DialogHeader>
          {selectedEnquiry && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Name</label>
                <p className="text-lg">{selectedEnquiry.firstName} {selectedEnquiry.lastName}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                    <Mail className="h-4 w-4" /> Email
                  </label>
                  <p className="break-all">{selectedEnquiry.email}</p>
                </div>
                {selectedEnquiry.phone && (
                  <div>
                    <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                      <Phone className="h-4 w-4" /> Phone
                    </label>
                    <p>{selectedEnquiry.phone}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Subject</label>
                <p className="text-lg font-medium">{selectedEnquiry.subject || 'N/A'}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Message / Project Details</label>
                <p className="mt-2 p-4 bg-gray-50 rounded-lg whitespace-pre-wrap">
                  {selectedEnquiry.projectDetails}
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">
                  Update Status
                </label>
                <Select
                  value={selectedEnquiry.status}
                  onValueChange={(value) => handleStatusChange(selectedEnquiry._id, value)}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="read">Read</SelectItem>
                    <SelectItem value="replied">Replied</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}