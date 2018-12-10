<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification as IlluminateNotification;

class Notification extends IlluminateNotification implements ShouldQueue
{
    use Queueable;

    const RATE_LIMIT = 50;

    const MINUTES_TO_WAIT = 1;

    public function __construct()
    {
        $this->delay($this->getDelay());
    }

    /**
     * @return float|int
     */
    protected function calculateMinutes()
    {
        return (int) ($this->getMailSentCount() / self::RATE_LIMIT);
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array
     */
    public function via()
    {
        return ['mail'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return $notifiable->toArray();
    }

    protected function getDelay()
    {
        $minutes = now()->addMinutes($this->calculateMinutes());

        $this->addMailSentToCount();

        return $minutes;
    }

    protected function getMailSentCount()
    {
        return cache()->get('mail_sent_count', 0);
    }

    protected function addMailSentToCount()
    {
        cache()->put(
            'mail_sent_count',
            $this->getMailSentCount() + 1,
            self::MINUTES_TO_WAIT
        );
    }
}
