import { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { AdminLayout, PageHeader, Card, StatCard, Button, Badge, DataTable, FormInput, FormSelect } from '@/Components';
export default function PaymentReport({
  payments,
  stats,
  filters
}) {
  const {
    auth
  } = usePage().props;
  const can = auth?.can || {};
  const [localFilters, setLocalFilters] = useState({
    start_date: filters.start_date || '',
    end_date: filters.end_date || '',
    status: filters.status || 'all'
  });
  const formatCurrency = amount => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount || 0);
  };
  const handleFilter = () => {
    router.get('/admin/reports/payment', localFilters, {
      preserveState: true
    });
  };
  const handleExport = () => {
    const params = new URLSearchParams(localFilters).toString();
    window.location.href = `/admin/reports/export/payment?${params}`;
  };
  const statusOptions = [{
    value: 'all',
    label: t('All Statuses')
  }, {
    value: 'requested',
    label: 'Requested'
  }, {
    value: 'pending_ops',
    label: 'Pending Ops'
  }, {
    value: 'pending_finance',
    label: 'Pending Finance'
  }, {
    value: 'approved',
    label: 'Approved'
  }, {
    value: 'paid',
    label: 'Paid'
  }, {
    value: 'rejected',
    label: 'Rejected'
  }];
  const getStatusBadge = status => {
    const variants = {
      requested: 'warning',
      pending_ops: 'warning',
      pending_finance: 'warning',
      approved: 'info',
      paid: 'success',
      rejected: 'danger'
    };
    return <Badge variant={variants[status] || 'default'}>{status.replace('_', ' ')}</Badge>;
  };
  const columns = [{
    key: 'id',
    label: t('ID'),
    render: row => `#${row.id}`
  }, {
    key: 'vendor',
    label: t('Vendor'),
    render: row => row.vendor?.company_name || 'N/A'
  }, {
    key: 'invoice_number',
    label: t('Invoice #'),
    render: row => row.invoice_number || '-'
  }, {
    key: 'amount',
    label: t('Amount'),
    render: row => formatCurrency(row.amount)
  }, {
    key: 'status',
    label: t('Status'),
    render: row => getStatusBadge(row.status)
  }, {
    key: 'created_at',
    label: 'Requested',
    render: row => new Date(row.created_at).toLocaleDateString()
  }];
  const header = <PageHeader title={t('Payment Report')} subtitle={t('View and export payment request data')} actions={<Link href="/admin/reports">
                    <Button variant="secondary">Back to Reports</Button>
                </Link>} />;
  return <AdminLayout title={t('Payment Report')} activeNav="Reports" header={header}>
            <div className="space-y-6">
                {/* Summary Stats */}
                <div className="grid md:grid-cols-4 gap-4">
                    <StatCard label="Total Amount" value={formatCurrency(stats.total_amount)} icon="payments" color="primary" />
                    <StatCard label="Pending" value={`${stats.pending_count} (${formatCurrency(stats.pending_amount)})`} icon="clock" color="warning" />
                    <StatCard label="Approved" value={`${stats.approved_count} (${formatCurrency(stats.approved_amount)})`} icon="success" color="info" />
                    <StatCard label="Paid" value={`${stats.paid_count} (${formatCurrency(stats.paid_amount)})`} icon="payments" color="success" />
                </div>

                {/* Filters */}
                <Card title={t('Filters')} allowOverflow>
                    <div className="p-4 flex flex-wrap items-end gap-4">
                        <div className="flex-1 min-w-[150px]">
                            <label className="block text-sm font-medium text-(--color-text-secondary) mb-1">
                                {t('Start Date')}
                            </label>
                            <FormInput type="date" value={localFilters.start_date} onChange={value => setLocalFilters({
              ...localFilters,
              start_date: value
            })} />
                        </div>
                        <div className="flex-1 min-w-[150px]">
                            <label className="block text-sm font-medium text-(--color-text-secondary) mb-1">
                                {t('End Date')}
                            </label>
                            <FormInput type="date" value={localFilters.end_date} onChange={value => setLocalFilters({
              ...localFilters,
              end_date: value
            })} />
                        </div>
                        <div className="flex-1 min-w-[150px]">
                            <label className="block text-sm font-medium text-(--color-text-secondary) mb-1">
                                {t('Status')}
                            </label>
                            <FormSelect value={localFilters.status} onChange={val => setLocalFilters({
              ...localFilters,
              status: val
            })} options={statusOptions} />
                        </div>
                        <div className="flex gap-2">
                            <Button onClick={handleFilter}>{t('Apply Filters')}</Button>
                            {can['reports.export'] && <Button variant="secondary" onClick={handleExport}>
                                    {t('Export CSV')}
                                </Button>}
                        </div>
                    </div>
                </Card>

                {/* Data Table */}
                <Card title={`Payment Records (${payments?.data?.length || 0} shown)`}>
                    <DataTable columns={columns} data={payments?.data || []} links={payments?.links || []} emptyMessage="No payment records found for the selected filters." />
                </Card>
            </div>
        </AdminLayout>;
}