<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita8936fa4123decec5530e575f239c405
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
        'C' => 
        array (
            'Chatkit\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
        'Chatkit\\' => 
        array (
            0 => __DIR__ . '/..' . '/pusher/pusher-chatkit-server/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita8936fa4123decec5530e575f239c405::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita8936fa4123decec5530e575f239c405::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
