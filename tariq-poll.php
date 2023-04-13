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

	wp_enqueue_script( 'google-charts', 'https://www.gstatic.com/charts/loader.js' );


	register_block_type(__DIR__ . '/build', [
		'render_callback' => 'tariq_poll_tariq_poll_block_render'
	]);

	register_post_meta('page', 'tariq_poll_data', [
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string'
	]);

	register_post_meta('page', 'tariq_poll_title', [
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string'
	]);
}
add_action('init', 'tariq_poll_tariq_poll_block_init');


function tariq_poll_tariq_poll_block_render($attributes, $content, $block) {

	$data = get_post_meta( $block->context['postId'], 'tariq_poll_data', true );
	$title = get_post_meta( $block->context['postId'], 'tariq_poll_title', true );

	$data = $data ? array_merge([["Item", "Votes"]], json_decode($data, true)) : [];

	ob_start();
	?>
	<div id="chart_div" style="width:100%;height:500px"></div>
	<script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable(<?= json_encode($data); ?>);

        var options = {
          title: "<?= $title; ?>"
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
    </script>

	<?php
	return ob_get_clean();
}
