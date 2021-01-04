<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
if (strstr($_SERVER['SERVER_NAME'],'lilo.local')) {
	define( 'DB_NAME', 'local' );

	/** MySQL database username */
	define( 'DB_USER', 'root' );

	/** MySQL database password */
	define( 'DB_PASSWORD', 'root' );

	/** MySQL hostname */
	define( 'DB_HOST', 'localhost' );

	/** Database Charset to use in creating database tables. */
	define( 'DB_CHARSET', 'utf8' );

	/** The Database Collate type. Don't change this if in doubt. */
	define( 'DB_COLLATE', '' );
} else {
	define( 'DB_NAME', 'dbhwx9dazaf0nb' );

	/** MySQL database username */
	define( 'DB_USER', 'uxk5p6sstkygq' );

	/** MySQL database password */
	define( 'DB_PASSWORD', 'f6{65;%r)Lc#' );

	/** MySQL hostname */
	define( 'DB_HOST', '127.0.0.1' );

	/** Database Charset to use in creating database tables. */
	define( 'DB_CHARSET', 'utf8' );

	/** The Database Collate type. Don't change this if in doubt. */
	define( 'DB_COLLATE', '' );
}



/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ZyQ9G86NSAydFEY3SvQcS4jZz/eHPgSMAyuHWINJLWLkcl0M0JoXmYfvYGiQh7nI74GZgJ02eSXP2tn01LI+yg==');
define('SECURE_AUTH_KEY',  'JE7pxNyG7agYSIDUtZOqZgKwcfh9J+nlTA3E37KqjLLBnEKmEd2LeMg7bkSSJITdqRK48FtzzjxRBwnLEZcDuw==');
define('LOGGED_IN_KEY',    'baxi7UggEPEi+9E1XeS9ptO4oyZuHZfE6nEGAPNkKsNjvvis9PrjjeX0JlJgQMiUzaheDdIfHxASLG/RUXBaKQ==');
define('NONCE_KEY',        'EG4ZaWQy4SjgwhpSY3Z0lxdk14Oz09Cr5iwB3PzFI9hZywKpOs3W2nTY3pvSQ7FL72BN/6CLuVJcbnXzvleLiA==');
define('AUTH_SALT',        'eFir5AhpGde6POEmXk5oWRx2tF2QXlrnvCx9Lg551pBuwzM3r5eghC0/DrdTOlOPTHrG3XEL1pLonVFAVCajyQ==');
define('SECURE_AUTH_SALT', '7iIYcXf7kqXXlPeV0VBeYzyrMvDI2SRk2z6m4sF41nRjXCbClwqDOoJ2gaDH3p3MM6EdkdjPLEk+pYcABMNjqA==');
define('LOGGED_IN_SALT',   'DIZnx8qViZCDfLY6k9MMAynRfD+rd0R5Wb/MOWAeG6CxJsNrkQwkv4nMoWxCW4fGUIhui9Qcy0/7f5BXDloFug==');
define('NONCE_SALT',       'PV5LngtiF6Ja1jl4DEbwoxuxgPYAw5PgcOpCiJjwcS1R0mXLQTZ4Znxv6ZBl8NJoiFONYmX5Dk70ZJaFdaY8wQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
