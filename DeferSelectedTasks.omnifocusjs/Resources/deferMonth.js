(() => Object.assign(
    new PlugIn.Action(selection => {

        // main :: IO ()
        const main = () => {

            // addDays :: Int -> Date -> Date
            const addDays = n => date => {
                return (
                    date.setDate(n + date.getDate()),
                    date
                );
            };

            // addWeeks :: Int -> Date -> Date
            const addWeeks = n => addDays(7 * n);
            
            // addMonths :: Int -> Date -> Date
            const addMonths = n => date => {
                return (
                    date.setMonth(n + date.getMonth()),
                    date
                )
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
    )   
)();