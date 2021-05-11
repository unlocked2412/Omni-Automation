(() => Object.assign(
    new PlugIn.Action(selection => {

        // main :: IO ()
        const main = () => {

            // setHours :: Int -> Date -> Date
            const setHours = n => dte => {
                const dte2 = new Date(dte);
                return (
                    dte2.setHours(n, 0, 0),
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
                    task.deferDate = setHours(1)(taskDate),
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