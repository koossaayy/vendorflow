<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
class DocumentExpiryReminder extends Notification implements ShouldQueue
{
    use Queueable;
    public function __construct(private readonly string $documentTypeName, private readonly int $documentId, private readonly int $vendorId, private readonly int $daysRemaining, private readonly bool $isExpired = false)
    {
    }
    /**
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }
    /**
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        $message = $this->isExpired ? __('Your :documentTypeName has expired. Please upload a new document.', ['documentTypeName' => $this->documentTypeName]) : __('Your :documentTypeName will expire in :daysRemaining days. Please renew it.', ['documentTypeName' => $this->documentTypeName, 'daysRemaining' => $this->daysRemaining]);
        return ['title' => $this->isExpired ? __('Document Expired') : __('Document Expiring Soon'), 'message' => $message, 'document_id' => $this->documentId, 'vendor_id' => $this->vendorId, 'days_remaining' => $this->daysRemaining, 'severity' => $this->isExpired ? 'critical' : ($this->daysRemaining <= 7 ? 'high' : 'medium')];
    }
}