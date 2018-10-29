<?php

return [
    'title' => 'Laravel Health Check Panel',

    'resources' => [
        'path' => config_path('health/resources'),

        'enabled' =>  [
            'AppKey',
            // 'Broadcasting',
            'Cache',
            'ConfigurationCached',
            'Database',
            'DebugMode',
            'DirectoryPermissions',
            'DiskSpace',
            // 'DocuSign',
            // 'ElasticsearchConnectable',
            'EnvExists',
            'Filesystem',
            'Framework',
            'Horizon',
            // 'Http',
            'Https',
            'LaravelServices',
            'Latency',
            'LocalStorage',
            'Mail',
            'MailgunConnectable',
            // 'MemcachedConnectable',
            'MigrationsUpToDate',
            // 'MySql',
            // 'MySqlConnectable',
            // 'NewrelicDeamon',
            'NginxServer',
            'PackagesUpToDate',
            'Php',
            'PostgreSqlConnectable',
            'PostgreSqlServer',
            'Queue',
            'QueueWorkers',
            'RebootRequired',
            'Redis',
            'RedisConnectable',
            'RedisServer',
            'RoutesCached',
            // 'S3',
            'SecurityChecker',
            'ServerLoad',
            'ServerUptime',
            'Sshd',
            'Supervisor',
        ],

    ],

    'sort_by' => 'slug',

    'cache' => [
        'minutes' => config('app.debug') ? false : true, // false = disabled

        'key' => 'health-resources',
    ],

    'database' => [
        'enabled' => true,

        'graphs' => [
            'enabled' => true,

            'height' => 90,
        ],

        'max_records' => 30,
    ],

    'notifications' => [
        'enabled' => true,

        'notify_on' => [
            'panel' => false,
            'check' => true,
            'string' => true,
            'resource' => false,
        ],

        'action-title' => 'View App Health',

        'action_message' =>
            "The '%s' service is in trouble and needs attention%s",

        'from' => [
            'name' => 'Laravel Health Checker',

            'address' => 'healthchecker@mydomain.com',

            'icon_emoji' => ':anger:',
        ],

        'scheduler' => [
            'enabled' => true,

            'frequency' => 'everyMinute', // most methods on -- https://laravel.com/docs/5.3/scheduling#defining-schedules
        ],

        'users' => [
            'model' => App\Data\Models\User::class,

            'emails' => ['admin@mydomain.com'],
        ],

        'channels' => ['mail', 'slack'], // mail, slack

        'notifier' => 'PragmaRX\Health\Notifications',
    ],
];
