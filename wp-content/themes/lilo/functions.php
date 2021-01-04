<?php
function theme_support() {
  add_theme_support( 'align-wide', 'align-full' );
}
add_action('after_setup_theme','theme_support');

function lilo_custom_logo_setup() {
  $defaults = array(
  'height'      => 100,
  'width'       => 400,
  'flex-height' => true,
  'flex-width'  => true,
  'header-text' => array( 'site-title', 'site-description' ),
  'unlink-homepage-logo' => true,
  );
  add_theme_support( 'custom-logo', $defaults );
  }
  add_action( 'after_setup_theme', 'lilo_custom_logo_setup' );
?>
