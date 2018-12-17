<?php
namespace App\Data\Models;

use App\Data\Models\Traits\Selectable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Auditable as AuditableTrait;
use OwenIt\Auditing\Contracts\Auditable as AuditableContract;

abstract class Base extends Model implements AuditableContract
{
    use AuditableTrait, Selectable;

    /**
     * @var bool
     */
    protected $revisionEnabled = true;

    /**
     * @var bool
     */
    protected $revisionCreationsEnabled = true;

    /**
     * @var array
     */
    protected $dataTypes = [];

    /**
     * @var array
     */
    protected $orderBy = [];

    /**
     * @var array
     */
    protected $appends = ['model'];

    /**
     * Cache keys to be flushed when a model is saved.
     *
     * @var array
     */
    protected $flushKeys = [];

    /**
     * Default joins for the table
     *
     * @var array
     */
    protected $joins = [];

    /**
     * Columns which can be used on filter
     *
     * @var array
     */
    protected $filterableColumns = ['name'];

    protected static function boot()
    {
        parent::boot();

        static::bootObservers();
    }

    protected static function bootObservers()
    {
    }

    protected function flushKeys()
    {
        coollect($this->flushKeys)->each(function ($key) {
            Cache::forget($key);
        });
    }

    /**
     * @param $column
     *
     * @return mixed
     */
    public static function getDataTypeOf($column)
    {
        $model = new static();

        return collect($model->dataTypes)->get($column);
    }

    /**
     * @return array
     */
    public function getJoins()
    {
        return coollect($this->joins);
    }

    /**
     * @return array
     */
    public function getOrderBy()
    {
        return $this->orderBy;
    }

    public function save(array $options = [])
    {
        $this->flushKeys();

        Cache::tags(['search'])->flush();

        return parent::save($options);
    }

    public function sendNotifications()
    {
        return $this;
    }

    public function logEmailWasSent()
    {
        $this->email_sent_at = now();

        $this->save();
    }

    public function sendNotificationsForClass(string $class)
    {
        if (($notifiables = $this->getNotifiables())->count() == 0) {
            return false;
        }

        $notifiables->each(function ($notifiable) use ($class) {
            $notifiable->notify(new $class($this));
        });

        return $this;
    }

    public function getModelAttribute()
    {
        return get_class($this);
    }

    public function getFilterableColumns()
    {
        return coollect($this->filterableColumns);
    }

    public function getCurrentAuthenticatedUserId()
    {
        return current_user()->id ?? null;
    }

    public function hasAttribute($attr)
    {
        return array_key_exists($attr, $this->attributes);
    }
}
