<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Application static data
    |--------------------------------------------------------------------------
    |
    */

    'product-api-key' => [
        'amazon-product-api' => [
            'access-key' => 'AKIAIQYICLTUI4NBTPGA',
            'secret-key' => '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',
            'associate-tag' => 'ideaing07-20',
        ],
    ],

    'user-registration-info' => [
        'next-project-focus' => ['Bathroom', 'Garage', 'Laundry-Room'],
        'project-starting-time' => ['3-months', '6-months'],
        'desired-service' => ['Architects', 'Interior-Designers', 'Roofing-Gutters'],

    ],


    'parent-id-not-exist' => 'Parent ID does not exist !',
    'category-delete-exists' => 'Can\'t delete category as product exists in that category !',
    'category-delete' => 'Category deleted successfully',
    'category-updated' => 'Category updated successfully',
    'category-not-exist' => 'Category not exits!',

    // API response status.
    'api-status' => [
        'success' => 200,
        'success-with-variation' => 210,
        'success-redirect' => 220,
        'success-with-fb' => 230,
        'success-with-out-verification' => 250,
        'validation-fail' => 400,
        'app-failure' => 410,
        'system-fail' => 500,
        'membership-cancellation-fail' => 600,

    ],

    // Category Static Blog Name for Category
    'blog-name' => 'blog',

    // Product message
    'product' => [
        'permalink-exist' => 'No product exists with this permalink',
        'can-not-create-product' => 'Can not create product with this permalink!',
        'product-added' => 'Successfully product added',
        'product-not-found' => 'No product found with the provided ID',
    ],

    // File message
    'file' => [
        'file-not-exist' => 'file-not-exist',
        'file-invalid' => 'file-invalid',
        'file-max-size' => 3758094,
        'file-max-limit-exit' => 'file-max-limit-exit',
        'file-extension-invalid' => 'file-extension-invalid',
        's3-path' => 'https://s3-us-west-1.amazonaws.com/ideaing-01/'
    ],

    // API product update time (in Hour)
    'product-update-time-limit' => 24,

    // default user picture
    'user-image' => 'https://s3-us-west-1.amazonaws.com/ideaing-01/product-56c602ae87429-user-default.png',

    // Membership fee
    'VIP' => '5',
    'VIP-Membership' => 'TEST',

    // Cache Clean key
    'cache-clean-key' => 'com'


];
