import { AdminLayout, PageHeader, DataTable, Badge, Card } from '@/Components';
export default function AuditIndex({
  logs = []
}) {
  const columns = [{
    header: t('Time'),
    render: row => <span className="text-(--color-text-secondary) text-sm">{row.created_at}</span>
  }, {
    header: t('User'),
    render: row => <span className="text-(--color-text-primary) font-medium">
                    {row.user?.name || t('System')}
                </span>
  }, {
    header: t('Event'),
    render: row => <Badge status={row.event_type || 'info'}>{row.event || t('Action')}</Badge>
  }, {
    header: t('Entity'),
    render: row => <span className="text-(--color-text-secondary) capitalize">
                    {row.auditable_type?.split('\\').pop()}
                </span>
  }, {
    header: t('Description'),
    render: row => <span className="text-(--color-text-secondary) text-sm">
                    {row.reason || row.description || t('No details')}
                </span>
  }, {
    header: 'IP',
    render: row => <span className="text-(--color-text-tertiary) font-mono text-xs">
                    {row.ip_address || '-'}
                </span>
  }];
  const header = <PageHeader title={t('Audit Logs')} subtitle={t('System activity and change history')} />;
  return <AdminLayout title={t('Audit Logs')} activeNav={t('Audit Logs')} header={header}>
            <Card className="overflow-hidden">
                <DataTable columns={columns} data={logs} emptyMessage="No audit logs recorded" stickyHeader={true} />
            </Card>
        </AdminLayout>;
}