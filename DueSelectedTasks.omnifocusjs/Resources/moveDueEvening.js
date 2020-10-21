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
                    date.setMonth(n + d.getMonth()),
                    date
                )
            };

            // setHours :: Int -> Date -> Date
            const setHours = n => date => {
                return (
                    date.setHours(n, 0, 0),
                    date
                );
            };

            const 
                ts = selection
                    .tasks
                    .filter(task => null !== task.dueDate);

            return ts.map(task => {
                    const
                        taskDate = task.dueDate;
                    return (
                        task.dueDate = setHours(17)(new Date()),
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