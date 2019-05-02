<?php
namespace App\Mail;

class Invitation extends Mailable
{
    private function copy($file, $downloaded)
    {
        if (!file_exists($downloaded)) {
            info("Copying {$file} -> {$downloaded}");

            copy($file, $downloaded);
        }
    }

    private function downloadAndGetPath($file)
    {
        if (file_exists($publicFile = public_path($file))) {
            return $publicFile;
        }

        if (filter_var($file, FILTER_VALIDATE_URL)) {
            return $this->downloadAsTempFile($file);
        }

        return null;
    }

    private function downloadAsTempFile($file)
    {
        $this->copy($file, $downloaded = $this->makeAttachmentFileName($file));

        return $downloaded;
    }

    /**
     * @return mixed
     */
    protected function hasAttachment()
    {
        return $this->notification->invitation->subEvent->invitation_file;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $filePath = $this->downloadAndGetPath(
            $this->notification->invitation->subEvent->invitation_file
        );

        $this->to($this->notification->routeNotificationForMail())
            ->from($this->fromArray('address'), $this->fromArray('name'))
            ->subject($this->notification->subject)
            ->markdown('emails.invitation');

        if ($this->hasAttachment()) {
            $this->attach($filePath, [
                'as' => 'convite.' . pathinfo($filePath, PATHINFO_EXTENSION),
                'mime' => mime_content_type($filePath),
            ]);
        }

        return $this;
    }

    /**
     * @param $file
     * @return mixed
     */
    private function makeAttachmentFileName($file)
    {
        return (
            sys_get_temp_dir() .
            '/events-attachment-' .
            sha1($file) .
            '.' .
            pathinfo($file, PATHINFO_EXTENSION)
        );
    }
}
