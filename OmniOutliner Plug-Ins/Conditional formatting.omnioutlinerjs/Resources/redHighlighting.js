(() => Object.assign(
	new PlugIn.Handler((sender, item, column, state) => {

		// main :: IO ()
		const main = () => {
			return item.topic.toLowerCase() === 'red' ? (
				(
					item.style.set(Style.Attribute.BackgroundColor, Color.RGB(1.0, 0.5, 0.5, 1.0)),
					item
				)
			) : (
				item.style.set(Style.Attribute.BackgroundColor, Color.RGB(1.0, 1.0, 1.0, 1.0)),
				item
			)
		};

		// MAIN -----------------------------------------
		return main()
	}), {
		willAttach: x => (
			console.log('Handler Attached')
		),
		willDetach: x => console.log('Handler Detached')
	})
)();