(() => Object.assign(
    new PlugIn.Action(selection => {

        // main :: IO ()
        const main = () => {
            // addDays :: Int -> Date -> Date
            const addDays = n => dte => {
                const dte2 = new Date(dte);
                return (
                    dte2.setDate(n + dte.getDate()),
                    dte2
                );
            };

            // addWeeks :: Int -> Date -> Date
            const addWeeks = n => addDays(7 * n);

            const
                ts = selection
                .tasks
                .filter(task => null !== task.deferDate);

            return ts.map(task => {
                const
                    taskDate = task.deferDate;
                return (
                    task.deferDate = addWeeks(1)(taskDate),
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