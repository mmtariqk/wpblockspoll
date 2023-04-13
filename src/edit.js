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
}, setAttributes, context: { postType, postId } }) {


	// const postType = useSelect((select) => {
	// 	return select('core/editor').getCurrentPostType();
	// });

	const [meta, updateMeta] = useEntityProp('postType', postType, 'meta', postId);

	const updatePollData = () => {

		updateMeta({
			...meta,
			tariq_poll_data: JSON.stringify(options),
			tariq_poll_title: title
		});

	}

	return (
		<div {...useBlockProps()}>
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
								value={title}
								onChange={(newTitle) => setAttributes({ title: newTitle })}
							/>
						</PanelRow>
						<hr />

						{
							options.map((option, i) => {
								return <PanelRow key={i}>
									<table width="100%" border="0">
										<tr>
											<td width="50%">
												<TextControl label="Item" value={option[0]} onChange={(newValue) => {
													let removeIdx = false;
													let updatedOptions = options.map((entry, ei) => {
														if (option[0] == entry[0]) {
															return [newValue, entry[1]];
														}
														return entry;
													});

													setAttributes({ options: updatedOptions });
												}} />
											</td>
											<td width="50%">
												<TextControl label="Votes" value={option[1]} onChange={(newValue) => {
													const updatedOptions = options.map((entry) => {
														if (option[0] == entry[0]) {
															return [entry[0], newValue * 1];
														}
														return entry;
													});
													console.log(updatedOptions);
													setAttributes({ options: updatedOptions });
												}} />
											</td>
											<td><button onClick={() => {
												let updatedOptions = [];
												updatedOptions = options.filter((entry, ei) => ei !== i);
												setAttributes({ options: updatedOptions });
											}}>x</button></td>
										</tr>
									</table>
								</PanelRow>
							})
						}

						<PanelRow>
							<table width="100%" border="0">
								<tr>
									<td width="50%">
										<Button style={{width:'100%',textAlign: 'center'}} onClick={() => {
											const updatedOptions = [...options, ['', 0]];
											setAttributes({ options: updatedOptions })
										}}>Add New</Button>
									</td>
									<td width="50%">
										<Button style={{width:'100%',textAlign: 'center'}} isPrimary onClick={() => {
											updatePollData()
										}}>Save</Button>
									</td>
								</tr>
							</table>

						</PanelRow>



					</PanelBody>
				</Panel>
			</InspectorControls>
		</div>
	);
}
