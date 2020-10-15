(() => Object.assign(
    new PlugIn.Action(selection => {

        // main :: IO ()
        const main = () => {
            // addDays :: Int -> Date -> Date
            const addDays = n => dte => {
                return (
                    dte.setDate(n + dte.getDate()),
                    dte
                );
            };

            // addWeeks :: Int -> Date -> Date
            const addWeeks = n => addDays(7*n);
            
            // addMonths :: Int -> Date -> Date
            const addMonths = n => dte => {
                return (
                    dte.setMonth(n + dte.getMonth()),
                    dte
                )
            };

            const 
                ts = selection
                    .tasks
                    .filter(task => null !== task.dueDate);

            return ts.map(task => {
                const
                    taskDate = task.dueDate;
                return (
                    task.dueDate = addWeeks(1)(taskDate),
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
                .filter(task => null !== task.dueDate)
                .length > 0
        }
    )   
)();