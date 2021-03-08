(() => Object.assign( 
    new PlugIn.Action(selection => {
        // Defer every selected task to 
        // 5 PM.
        // main :: IO ()
        const main = () => {
            const
                ts = selection
                    .tasks
                    .filter(task => null !== task.deferDate);
            
            return ts.map(task => {
                    return (
                        task.deferDate = setHours(17)(new Date()),
                        task
                    )
                })
        };

        // setHours :: Int -> Date -> Date
        const setHours = n => dte => {
            const dte2 = new Date(dte);
            return (
                dte2.setHours(n, 0, 0),
                dte2
            );
        };

        // MAIN -----------------------------------------
        return main()
        
        }), {
            validate: selection => 
                selection
                .tasks
                .length > 0
        }
    )   
)();
