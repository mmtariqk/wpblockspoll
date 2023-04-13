/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */


import { Chart } from "react-google-charts";

export default function Edit({ attributes: {
	title,
	options = [
		["Work", 11],
		["Eat", 2],
		["Commute", 2],
		["Watch TV", 2],
		["Sleep", 7],
	]
}, setAttributes, context: { postType, postId }}) {


	// const postType = useSelect((select) => {
	// 	return select('core/editor').getCurrentPostType();
	// });

	const [meta, updateMeta] = useEntityProp('postType', postType, 'meta', postId);

	const updatePollData = () => {
		console.log(meta);
		updateMeta({
			...meta,
			tariq_poll_data: JSON.stringify(options)
		})
	}
	console.log(meta);
	// console.log(meta);
	return (
		<div {...useBlockProps()}>
			<h3>{postId}</h3>
			<h3>{postType}</h3>
			<Chart
				chartType="PieChart"
				data={[["Item", "Votes"], ...options]}
				options={{
					title: title,
				}}
				width={"100%"}
				height={"400px"}
			/>
			<InspectorControls>
				<Panel header="Poll Options">
					<PanelBody
						title="Poll Options"
						initialOpen={true}
					>
						<PanelRow>
							<TextControl
								label="Title"
								onChange={(newTitle) => setAttributes({ title: newTitle })}
							/>
						</PanelRow>
						<hr />

						{
							options.map((option, i) => {
								return <PanelRow key={i}>
									<TextControl label="Item" value={option[0]} onChange={(newValue) => {
										const updatedOptions = options.map((e) => {
											if (option[0] == e[0]) {
												return [newValue, e[1]];
											}
											return e;
										});
										setAttributes({ options: updatedOptions });
									}} />
								</PanelRow>
							})
						}

						<PanelRow>

							<Button onClick={() => {
								const updatedOptions = [...options, ['', 0]];
								setAttributes({ options: updatedOptions })
							}}>Add New</Button>

						</PanelRow>
						<PanelRow>

							<Button isPrimary onClick={() => {
								updatePollData()
							}}>Save</Button>

						</PanelRow>



					</PanelBody>
				</Panel>
			</InspectorControls>
		</div>
	);
}
