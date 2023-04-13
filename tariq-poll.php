<?php

/**
 * Plugin Name:       Tariq Block Poll
 * Description:       WP Poll block created by Tariq
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tariq-poll
 *
 * @package           tariq-poll
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function tariq_poll_tariq_poll_block_init() {
	register_block_type(__DIR__ . '/build', [
		'render_callback' => 'tariq_poll_tariq_poll_block_render'
	]);

	register_post_meta('page', 'tariq_poll_data', [
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string'
	]);
}
add_action('init', 'tariq_poll_tariq_poll_block_init');


function tariq_poll_tariq_poll_block_render($attributes, $content, $block) {
	ob_start();
	// echo '<pre>'; print_r($block);
	echo $content;
	return ob_get_clean();
}
