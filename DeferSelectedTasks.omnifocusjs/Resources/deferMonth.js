(() => Object.assign(
    new PlugIn.Action(selection => {

        // main :: IO ()
        const main = () => {
            // addMonths :: Int -> Date -> Date
            const addMonths = n => dte => {
                const dte2 = new Date(dte);
                return (
                    dte2.setMonth(n + d.getMonth()),
                    dte2
                );
            };
            
            const
                ts = selection
                .tasks
                .filter(task => null !== task.deferDate);

            return ts.map(task => {
                const
                    taskDate = task.deferDate;
                return (
                    task.deferDate = addMonths(1)(taskDate),
                    task
                )
            })
        };

        // MAIN -----------------------------------------
        return main()

    }), {
        validate: selection =>
            selection
            .tasks
            .filter(task => null !== task.deferDate)
            .length > 0
    }
))();