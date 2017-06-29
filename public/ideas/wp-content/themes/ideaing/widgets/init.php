<?php

/**
 * Call all classes/class-*-widget.php
 *
 * @since WooCommerce Integration 1.0
 */

if ($list = glob(dirname(__FILE__) . "/classes/class-*-widget.php"))

  foreach ($list as $file)

    require $file;
