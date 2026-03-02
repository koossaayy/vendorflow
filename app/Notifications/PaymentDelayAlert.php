<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
class PaymentDelayAlert extends Notification implements ShouldQueue
{
    use Queueable;
    public function __construct(private readonly int $delayedCount, private readonly float $totalAmount, private readonly int $delayDays, private readonly bool $vendorFacing = false)
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
        $formattedAmount = number_format($this->totalAmount, 2);
        $message = $this->vendorFacing ? __(':delayedCount approved payment(s) totaling INR :formattedAmount are delayed beyond :delayDays days.', ['delayedCount' => $this->delayedCount, 'formattedAmount' => $formattedAmount, 'delayDays' => $this->delayDays]) : __(':delayedCount approved payment(s) totaling INR :formattedAmount are delayed beyond :delayDays days and need action.', ['delayedCount' => $this->delayedCount, 'formattedAmount' => $formattedAmount, 'delayDays' => $this->delayDays]);
        return ['title' => __('Payment Delay Alert'), 'message' => $message, 'type' => 'payment', 'delayed_count' => $this->delayedCount, 'total_amount' => $this->totalAmount, 'delay_days' => $this->delayDays, 'severity' => $this->delayedCount >= 10 ? 'critical' : 'high'];
    }
}