const ContentOutline = (props) => (
	<ol>
		{props.outline.map((heading) => (
			<li>
				<a href={"#" + heading.slug}>{heading.text}</a>
				{heading.subheadings.length > 0 && (
					<ContentOutline outline={heading.subheadings} />
				)}
			</li>
		))}
	</ol>
);

export default ContentOutline;
