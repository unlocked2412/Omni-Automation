(() => Object.assign(
    new PlugIn.Action(selection => {

        // OMNI JS CODE ---------------------------------------
        const omniJSContext = () => {
            // main :: IO ()
            const main = () => {
                const 
                    ts = selection
                        .tasks
                        .filter(task => null !== task.dueDate);
                return ts.map(task => {
                    //const
                    //    taskDate = task.dueDate;
                    return (
                        task.dueDate = until(isWeekend)(
                            addDays(1)
                        )(new Date()),
                        task
                    )
                })
            };
            
            // DATES -----------------------------------------------------
            // addDays :: Int -> Date -> Date
            const addDays = n => dte => {
                return (
                    dte.setDate(n + dte.getDate()),
                    dte
                );
            };

            // isWeekend :: Date -> Bool
            const isWeekend = dte =>
                any(
                    eq(dte.getDay())
                )([0, 6])

            // GENERIC FUNCTIONS --------------------------------------------
            // https://github.com/RobTrew/prelude-jxa
            // any :: (a -> Bool) -> [a] -> Bool
            const any = p =>
                // True if p(x) holds for at least
                // one item in xs.
                xs => xs.some(p);

            // eq (==) :: Eq a => a -> a -> Bool
            const eq = a =>
                // True when a and b are equivalent in the terms
                // defined below for their shared data type.
                b => {
                    const t = typeof a;
                    return t !== typeof b ? (
                        false
                    ) : 'object' !== t ? (
                        'function' !== t ? (
                            a === b
                        ) : a.toString() === b.toString()
                    ) : (() => {
                        const kvs = Object.entries(a);
                        return kvs.length !== Object.keys(b).length ? (
                            false
                        ) : kvs.every(([k, v]) => eq(v)(b[k]));
                    })();
                };

            // until :: (a -> Bool) -> (a -> a) -> a -> a
            const until = p => f => x => {
                let v = x;
                while (!p(v)) v = f(v);
                return v;
            };

            // MAIN -----------------------------------------
            return main()
        };

        return omniJSContext()
        
        }), {
            validate: selection => 
                selection
                .tasks
                .filter(task => null !== task.dueDate)
                .length > 0
        }
    )   
)();